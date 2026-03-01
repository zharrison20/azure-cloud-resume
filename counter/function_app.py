import logging
import os
import azure.functions as func
from azure.cosmos import CosmosClient, exceptions

# Configuration from environment variables
COSMOS_DB_ENDPOINT = os.environ["COSMOS_DB_ENDPOINT"]
COSMOS_DB_KEY = os.environ["COSMOS_DB_KEY"]
DATABASE_NAME = os.environ["DATABASE_NAME"]
CONTAINER_NAME = os.environ["CONTAINER_NAME"]

# Initialize Cosmos DB client globally for performance (connection pooling)
client = CosmosClient(COSMOS_DB_ENDPOINT, credential=COSMOS_DB_KEY)
database = client.get_database_client(DATABASE_NAME)
container = database.get_container_client(CONTAINER_NAME)

def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    
    # Get the page ID from the query parameters (e.g., ?pageId=home)
    page_id = req.params.get('pageId')
    if not page_id:
        try:
            req_body = req.get_json()
        except ValueError:
            pass
        else:
            page_id = req_body.get('pageId')

    if page_id:
        try:
            # Try to read the existing item
            counter = container.read_item(item=page_id, partition_key=page_id)
            counter['count'] += 1
            # Replace the item with the updated count
            container.replace_item(item=counter['id'], body=counter)
            count = counter['count']
        except exceptions.CosmosResourceNotFoundError:
            # If not found, create a new item
            new_item = {'id': page_id, 'count': 1}
            container.create_item(body=new_item)
            count = 1
        except exceptions.CosmosHttpResponseError as e:
            logging.error(f"Cosmos DB error: {e.message}")
            return func.HttpResponse("Error accessing Cosmos DB.", status_code=500)

        return func.HttpResponse(f"View count for page '{page_id}' is: {count}")
    else:
        return func.HttpResponse(
             "Please pass a pageId in the query string or in the request body for a view counter.",
             status_code=400
        )
