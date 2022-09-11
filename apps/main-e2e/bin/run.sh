#!/bin/bash

set -eu

mode=$1
dc_file=apps/main-e2e/docker-compose.yml

if [ "$mode" != "host" ] && [ "$mode" != "docker" ]; then
  echo "Mode must be 'host' or 'docker'"
  exit 1
fi

echo "=> Running e2e tests..."
if [ "$mode" == "host" ]; then
  nx run main-e2e:e2e:host
elif [ "$mode" == "docker" ]; then
  docker-compose -f $dc_file run --rm \
    --entrypoint="./node_modules/.bin/nx run main-e2e:e2e:docker" \
    cypress
fi
