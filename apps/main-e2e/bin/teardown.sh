#!/bin/bash

set -eu

dc_file=apps/main-e2e/docker-compose.yml

echo "=> Stopping services..."
docker-compose -f $dc_file down
