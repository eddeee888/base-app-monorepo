#!/bin/bash

function run(){
    local cmd="docker-compose run $@"
    echo $cmd
    eval $cmd
}

run $@