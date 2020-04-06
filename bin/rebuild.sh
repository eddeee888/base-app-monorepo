#!/bin/bash

function rebuild(){
    local cmd="docker-compose rm -f -s $@ && docker-compose build --no-cache $@"
    echo $cmd
    eval $cmd
}

rebuild $@