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
docker compose -f $dc_file up -d

# FIXME: Remove hardcoded sleep. Better to use wait-for-it.sh but it doesn't work in CI
sleep 10

echo "=> Initialising data..."
yarn env-cmd -f libs/main-prisma/.env.main-e2e nx init-database main-prisma --verbose
