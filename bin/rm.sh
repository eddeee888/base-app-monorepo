#!/bin/bash

function rm(){
    local cmd="docker-compose rm $@"
    echo $cmd
    eval $cmd
}

rm $@