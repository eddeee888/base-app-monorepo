#!/bin/bash

SERVE_MODE=${SERVE_MODE:-"prod"}

if [ "$SERVE_MODE" != "prod" ] && [ "$SERVE_MODE" != "dev" ]; then
  echo "x> SERVE_MODE must be 'e2e' or 'dev'"
  exit 1
fi

echo "=> Serve mode: $SERVE_MODE..."

if [ "$SERVE_MODE" == "prod" ]; then
  yarn nx run main:build-for-runtime:e2e
  yarn --cwd dist/apps/main start
elif [ "$SERVE_MODE" == "dev" ]; then
  yarn env-cmd -f libs/main-prisma/.env.main-e2e yarn nx serve main --hostname=0.0.0.0 --port=3000
fi
