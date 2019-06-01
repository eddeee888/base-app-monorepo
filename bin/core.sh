#!/bin/bash

# We are running this from /usr/local/bin
CORE_CMD_NAME="bra"


function display_help(){
    echo
    echo "Usage: $CORE_CMD_NAME [option...]" >&2
    echo
    echo "vm-up                 Set up docker environment."
    echo "up [service?]         Start one or all services in detached mode."
    echo "down                  Stop the project, remove all containers and images."
    echo "start [service?]      Start a service or all services."
    echo "build [service?]      Rebuild a service or all services."
    echo "stop [service?]       Stop a service or all services."
    echo "watch                 Start the project in watch mode."
    echo "logs [service?]       Look at the log of a particular service or all services."
    echo
    exit 1
}

function run(){
    #Go to project directory
    PROJECT_DIR=$(dirname $(readlink $(type -P $CORE_CMD_NAME)))
    cd $PROJECT_DIR/..

    #Run command
    script_name=$1
    shift
    ./bin/$script_name.sh $@
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