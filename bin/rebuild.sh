#!/bin/bash

function rebuild(){
    local cmd="docker-compose rm -f -s $1 && docker-compose build --no-cache $1"
    echo $cmd
    eval $cmd
}

rebuild $1