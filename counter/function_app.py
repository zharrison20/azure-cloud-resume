import azure.functions as func
from azure.cosmos import CosmosClient, exceptions
import os
import json

app = func.FunctionApp()

@app.route(route="counter", auth_level=func.AuthLevel.ANONYMOUS)
def get_count(req: func.HttpRequest) -> func.HttpResponse:
    # 1. Initialize Client (using Environment Variables)
    client = CosmosClient(os.environ["COSMOS_DB_ENDPOINT"], os.environ["COSMOS_DB_KEY"])
    container = client.get_database_client("SiteData").get_container_client("Counters")

    try:
        # 2. Fetch current record
        item_id = "visitor-count"
        item = container.read_item(item=item_id, partition_key=item_id)
        
        # 3. Increment and Save
        item['count'] += 1
        container.replace_item(item=item_id, body=item) #
        
        return func.HttpResponse(json.dumps({"count": item['count']}), 
                                 mimetype="application/json")
    
    except exceptions.CosmosResourceNotFoundError:
        # Fallback if document doesn't exist 
        container.create_item({"id": "visitor-count", "count": 1})
        return func.HttpResponse(json.dumps({"count": 1}), mimetype="application/json")
