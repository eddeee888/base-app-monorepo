#!/bin/bash

set -e

# We are running this from /usr/local/bin
CORE_CMD_NAME="bam"

function display_help(){
    echo
    echo "Usage: $CORE_CMD_NAME [option...]" >&2
    echo
    echo "vm-up                 Set up minimum networking requirements"
    echo "vm-down               Turn off all services and remove all networking setup"
    echo "up [service?]         Start one or all services in detached mode"
    echo "down                  Stop the project, remove all containers and images"
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

function run(){
    # Go to root project directory
    BIN_DIR=$(dirname $(readlink $(type -P $CORE_CMD_NAME)))
    cd $BIN_DIR/..

    # Set env to make it easier to load files in subsequent scripts
    export ROOT_DIR=$(pwd)
    export UTILS_DC=$ROOT_DIR/bin/utils-dc.sh
    export UTILS_CONST=$ROOT_DIR/bin/utils-constants.sh

    # Run command
    script_name=$1
    shift

    # dc-* ( docker-compose scripts ), ws-* ( workspace scripts ) are the main commands so if we don't find a command, try to prefix dc-
    # e.g. if `somecmd.sh` does not exist, `dc-somecmd.sh` will be checked
    if [[ -f ./bin/$script_name.sh ]]; then
      ./bin/$script_name.sh $@
    elif [[ -f ./bin/dc-$script_name.sh ]]; then
      ./bin/dc-$script_name.sh $@
    elif [[ -f ./bin/ws-$script_name.sh ]]; then
      ./bin/ws-$script_name.sh $@
    else
      echo "$script_name command not found"
      exit 1
    fi
}

function main(){
    #If no command, show help menu 
    if [ ! $1 ]
    then
        display_help
        exit 1
    fi
    
    run $@
}

main $@