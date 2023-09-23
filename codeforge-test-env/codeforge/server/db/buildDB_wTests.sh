#!/bin/bash

# Import variables from .env
source .env
echo "Connecting to DB: $PG_URI"

echo "Dropping tables..."
psql -d ${PG_URI} -f ./server/db/test_data_scripts/dropTables.sql
echo "Done dropping tables"

echo "Building tables..."
psql -d ${PG_URI} -f ./server/db/sql_scripts/buildDB.sql
echo "Done building tables"

echo "Add test data..."
node ./server/db/test_data_scripts/insertTestData.js
echo "Done adding test data"