#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/constants.sh
source $CURRENT_DIR/utils/error_exit.sh

function stop_docker_machine(){
  docker-machine stop $CORE_CMD_NAME
}

function remove_stoppped_container(){
  if [ "$(docker ps -aq -f status=exited -f name=$DNS_CONTAINER_NAME)" ]; then
    docker rm $DNS_CONTAINER_NAME &> /dev/null || error_exit "Unable to remove $DNS_CONTAINER_NAME container"
  fi
}

function remove_dns_resolver {
  remove_stoppped_container
  if [ "$(docker ps -q -f name=$DNS_CONTAINER_NAME)" ]; then
    docker stop $DNS_CONTAINER_NAME &> /dev/null || error_exit "Unable to stop $DNS_CONTAINER_NAME container"
    remove_stoppped_container
  fi
}

remove_dns_resolver
$CORE_CMD_NAME stop
stop_docker_machine