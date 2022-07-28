#!/bin/bash

set -eu

mode=$1

if [ "$mode" != "host" ] && [ "$mode" != "docker" ]; then
  echo "Mode must be 'host' or 'docker'"
  exit 1
fi

if [ ! -d "node_modules" ]; then
  echo "=> No node_modules. Installing..."
  yarn install
fi

dc_file=apps/main-e2e/docker-compose.yml

echo "=> Starting services..."
docker-compose -f $dc_file up -d main main-db

echo "=> Initialising data..."
docker-compose -f $dc_file exec -T main \
  ./apps/main-e2e/bin/wait-for-it.sh main-db:3306 -- yarn env-cmd -f libs/main-prisma/.env.main-e2e nx init-database main-prisma

echo "=> Running e2e tests..."
if [ "$mode" == "host" ]; then
  nx run main-e2e:e2e:host
elif [ "$mode" == "docker" ]; then
  docker-compose -f $dc_file run --rm \
    --entrypoint="./node_modules/.bin/nx run main-e2e:e2e:docker" \
    cypress
fi


echo "=> Stopping services..."
docker-compose -f $dc_file down
