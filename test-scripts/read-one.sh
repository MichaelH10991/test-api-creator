#!/bin/bash

id=$1
if [ -z $id ]; then
  echo "must pass in an id"
  exit 1
fi

curl -X GET http://localhost:8080/read/$id