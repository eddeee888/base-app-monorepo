#!/bin/bash

function watch(){
    local cmd="docker-compose up"
    echo $cmd
    eval $cmd
}

watch