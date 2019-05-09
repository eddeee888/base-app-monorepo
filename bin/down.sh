#!/bin/bash

function down(){
    local cmd="docker-compose down"
    echo $cmd
    eval $cmd
}

down