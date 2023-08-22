#!/bin/bash

curl -X POST http://`hostname`:8080/create \
  -H "Content-Type: application/json" \
  -d '{ 
    "title": "a title",
    "body": "some body",
    "date": "2023-08-22T20:59:20.559Z"
  }'