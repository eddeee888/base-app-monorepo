#!/bin/bash

set -eu

if [ ! -d "node_modules" ]; then
  echo "=> No node_modules. Installing..."
  yarn install
fi

dc_file=apps/main-e2e/docker-compose.yml

echo "=> Cleaning up services..."
docker compose -f $dc_file down

echo "=> Starting services..."
docker compose -f $dc_file up -d main main-db

echo "=> Initialising data..."
docker compose -f $dc_file exec -T main \
  ./apps/main-e2e/bin/wait-for-it.sh main-db:3307 -s -t 60 -- yarn env-cmd -f libs/main-prisma/.env.main-e2e nx init-database main-prisma

echo "=> Waiting for app to be ready..."
docker compose -f $dc_file exec -T main \
  ./apps/main-e2e/bin/wait-for-it.sh localhost:3000 -s -t 120 -- echo "=> App is ready"
