#!/bin/bash

#########################################

# About: Run this script concurrently
#        with the server to drop user 
#        sessions


#########################################

# mport variables from .env
source .env
echo "Connecting to DB: $PG_URI"
echo "Will drop out of date user sessions every ${SLEEPTIME} seconds"

while [ true ]
do 
    sleep ${SLEEPTIME}
    echo "Dropping expired sessions"
    psql -d ${PG_URI} -f ./server/db/sql_scripts/sessionRemove.sql
done