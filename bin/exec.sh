#!/bin/bash

function exec(){
    local cmd="docker-compose exec $@"
    echo $cmd
    eval $cmd
}

exec $@