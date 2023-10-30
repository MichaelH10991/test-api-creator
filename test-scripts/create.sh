#!/bin/bash

# url="http`hostname`:8080"
url="https://ck2hqui3j6.execute-api.eu-west-1.amazonaws.com/foo"

curl -X POST ${url}/create \
  -H "Content-Type: application/json" \
  -d '{
    "language": "Croatian",
    "group": "greetings",
    "local": "Hello",
    "foreign": "Zdravo"
  }'

curl -X POST ${url}/create \
  -H "Content-Type: application/json" \
  -d '{
    "language": "Croatian",
    "group": "greetings",
    "local": "Hi",
    "foreign": "Bok"
  }'

curl -X POST ${url}/create \
  -H "Content-Type: application/json" \
  -d '{
    "language": "Croatian",
    "group": "resturant",
    "local": "Table",
    "foreign": "Stol"
  }'

curl -X POST ${url}/create \
  -H "Content-Type: application/json" \
  -d '{
    "language": "Spanish",
    "group": "resturant",
    "local": "Table",
    "foreign": "Stol"
  }'