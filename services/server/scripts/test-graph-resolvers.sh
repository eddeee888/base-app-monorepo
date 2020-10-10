#!/bin/bash

source ./scripts/utils.sh

echo "*** Running tests..."
if dc_run --rm server ./scripts/wait-for-it.sh database:3306 -- yarn test:app:graph-resolvers; then
  echo "*** Tests passed!"
  dc_down
  exit 0
fi

echo "*** Tests failed!"
dc_down
exit 1