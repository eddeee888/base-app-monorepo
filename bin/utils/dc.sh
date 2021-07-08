#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/constants.sh

function dc() {
  local cmd="docker-compose -p ${DOCKER_PROJECT_NAME} $@"
  echo "=> ${CORE_CMD_NAME}.compose: "$cmd
  eval $cmd
}
