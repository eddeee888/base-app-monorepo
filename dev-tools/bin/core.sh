#!/bin/bash

set -e

CORE_CMD_NAME="bam"

function display_help {
  echo
  echo "Usage: $CORE_CMD_NAME [option...]" >&2
  echo
  echo "vm-up                 Set up minimum networking requirements"
  echo "vm-down               Turn off all services and stop all containers"
  echo "up [service?]         Start one or all services in detached mode"
  echo "down                  Stop the project, remove all containers"
  echo "build [service?]      Rebuild a service or all services"
  echo "start [service?]      Start a service or all services"
  echo "stop [service?]       Stop a service or all services"
  echo "exec [service?]       Execute a command inside a service"
  echo "run [service?]        Run a service"
  echo "shell [service?]      Shell into a service"
  echo "logs [service?]       Look at the log of a particular service or all services"
  echo "rebuild [service?]    Rebuild image of a service with no cache"
  echo "recreate [service?]   Recreate a service container"
  echo
  exit 1
}

function run {
  # Go to root project directory
  BIN_DIR=$(dirname $(readlink $(type -P $CORE_CMD_NAME)))
  cd $BIN_DIR/../..

  # Set env to make it easier to load files in subsequent scripts
  export ROOT_DIR=$(pwd)
  export UTILS_DC=$BIN_DIR/utils-dc.sh
  export UTILS_CONST=$BIN_DIR/utils-constants.sh

  # Run command
  script_name=$1
  shift



  # dc-* ( docker-compose scripts ), ws-* ( workspace scripts ) are the main commands so if we don't find a command, try to prefix dc-
  # e.g. if `somecmd.sh` does not exist, `dc-somecmd.sh` will be checked
  if [[ -f $BIN_DIR/$script_name.sh ]]; then
    $BIN_DIR/$script_name.sh $@
  elif [[ -f $BIN_DIR/dc-$script_name.sh ]]; then
    $BIN_DIR/dc-$script_name.sh $@
  elif [[ -f $BIN_DIR/ws-$script_name.sh ]]; then
    $BIN_DIR/ws-$script_name.sh $@
  else
    echo "$script_name command not found"
    exit 1
  fi
}

function main {
  #If no command, show help menu 
  if [ ! $1 ]
  then
      display_help
      exit 1
  fi
  
  run $@
}

main $@
