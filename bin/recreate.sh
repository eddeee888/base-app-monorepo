#!/bin/bash

function recreate(){
    local cmd="docker-compose rm -f -s $@ && docker-compose up -d $@"
    echo $cmd
    eval $cmd
}

recreate $@