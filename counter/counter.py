import logging
import azure.functions as func
from azure.data.tables import TableServiceClient
import os
import json

app = func.FunctionApp()

@app.route(route="visitCounter", auth_level=func.AuthLevel.ANONYMOUS)
def visit_counter(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Visitor counter function called.')

    connection_string = os.environ["COSMOS_DB_CONNECTION_STRING"]
    table_name = "VisitorCount"

    try:
        table_service = TableServiceClient.from_connection_string(conn_str=connection_string)
        table_client = table_service.get_table_client(table_name=table_name)

        entity = table_client.get_entity(partition_key="visitor", row_key="count")
        current_count = entity["count"]

        entity["count"] = current_count + 1
        table_client.upsert_entity(entity=entity)

        updated_count = entity["count"]

        return func.HttpResponse(
            json.dumps({"count": updated_count}),
            status_code=200,
            mimetype="application/json"
        )

    except Exception as e:
        logging.error(f"REAL ERROR: {e}")
        return func.HttpResponse(str(e), status_code=500)
    
    # Workflow test after moving deploy.yml