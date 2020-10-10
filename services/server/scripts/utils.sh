#!/bin/bash

TEST_FILE=docker-compose.test.yml

function dc_down() {
  echo "*** Removing containers..."
  docker-compose -f $TEST_FILE down
}

function dc_run() {
  echo "*** run $@"
  docker-compose -f $TEST_FILE run $@
}