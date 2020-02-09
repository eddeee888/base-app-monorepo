#!/bin/bash

function dm_create(){
    local cmd_create="docker-machine create --driver=virtualbox --virtualbox-cpu-count=2 --virtualbox-memory 4096 --virtualbox-disk-size=100000 $1"
    echo "*** Creating new docker machine called \"$1\"..."
    echo $cmd_create
    eval $cmd_create

    local cmd_increase_watchers="docker-machine ssh $1 'echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p'"
    echo "*** Increasing IO Notify watch limit on docker machine"
    echo $cmd_increase_watchers
    eval $cmd_increase_watchers

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