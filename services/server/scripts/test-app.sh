#!/bin/bash

SCRIPT_PATH="$( cd "$(dirname "$0")" >/dev/null 2>&1 ; pwd -P )"
SERVER_ROOT=${SCRIPT_PATH}/..
DOCKER_COMPOSE_FILE=${SERVER_ROOT}/docker-compose.test.yml

source ${SERVER_ROOT}/scripts/utils.sh

function testAfterReset(){
  echo "*** Running all tests..."
  dc_run ${DOCKER_COMPOSE_FILE} --rm server ./scripts/wait-for-it.sh database:3306 -- yarn prisma:migrate:reset -f
  if dc_run ${DOCKER_COMPOSE_FILE} --rm server yarn jest -i $@; then
    echo "*** Tests passed!"
    dc_down ${DOCKER_COMPOSE_FILE}
    exit 0
  fi
  echo "*** Tests failed!"
  dc_down ${DOCKER_COMPOSE_FILE}
  exit 1
}

function testNoReset(){
  if dc_run ${DOCKER_COMPOSE_FILE} --rm server ./scripts/wait-for-it.sh database:3306 -- yarn jest -i $@; then
    echo "*** Tests passed!"
    dc_down ${DOCKER_COMPOSE_FILE}
    exit 0
  fi
  echo "*** Tests failed!"
  dc_down ${DOCKER_COMPOSE_FILE}
  exit 1
}

flag=$1
case $flag in
  '--rebuild')
    echo "*** Rebuild..."
    dc_build ${DOCKER_COMPOSE_FILE} server
    testAfterReset ${@:2}
  ;;

  '--noreset')
    echo "*** Test without resetting database..."
    testNoReset ${@:2}
  ;;

  *)
    testAfterReset ${@:1}
esac