#!/bin/bash

function dm_create(){
    local cmd_create="docker-machine create --driver=virtualbox --virtualbox-cpu-count=4 --virtualbox-memory 8192 --virtualbox-disk-size=100000 $1"
    echo "*** Creating new docker machine called \"$1\"..."
    echo $cmd_create
    eval $cmd_create

    echo ""
    echo "Docker machine \"$1\" can now be used!"
    echo ""
    echo "# eval $(docker-machine env $1)"
    echo ""
    echo "This can also be put into ~/.bash_profile to be run all the time on startup."
    echo ""
    echo "---"
}

dm_create $1