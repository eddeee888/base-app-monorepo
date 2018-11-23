#!/bin/bash

function shell(){
    local cmd="docker-compose exec $1 /bin/bash"
    echo $cmd
    eval $cmd
}

shell $1