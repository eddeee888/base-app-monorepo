#!/bin/bash

set -e

source $UTILS_CONST

function dc() {
  local cmd="docker-compose --env-file=.env.dev-docker -p ${DOCKER_PROJECT_NAME} $@"
  echo "=> ${CORE_CMD_NAME}.compose: "$cmd
  eval $cmd
}
