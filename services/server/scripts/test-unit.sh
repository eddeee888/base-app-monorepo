#!/bin/bash

source ./scripts/utils.sh

echo "*** Running tests..."
if dc_run --rm server yarn test:app:unit; then
  echo "*** Tests passed!"
  dc_down
  exit 0
fi

echo "*** Tests failed!"
dc_down
exit 1