#!/bin/bash

function recreate(){
    local cmd="docker-compose rm -f -s $1 && docker-compose up -d $1"
    echo $cmd
    eval $cmd
}

recreate $1