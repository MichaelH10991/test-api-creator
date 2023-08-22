curl -X DELETE http://localhost:8080/delete/64e51e2911d9d1869be80666
#!/bin/bash

id=$1
if [ -z $id ]; then
  echo "must pass in an id"
  exit 1
fi

curl -X DELETE http://localhost:8080/delete/$id