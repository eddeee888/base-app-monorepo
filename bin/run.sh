#!/bin/bash

function run(){
    local cmd="docker-compose exec $@"
    echo $cmd
    eval $cmd
}

run $@