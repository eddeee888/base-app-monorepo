#!/bin/bash

function stop(){
    local cmd="docker-compose stop --timeout=1 $@"
    echo $cmd
    eval $cmd
}

stop $@