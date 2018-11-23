#!/bin/bash

function start(){
    local cmd="docker-compose start $1"
    echo $cmd
    eval $cmd
}

start $1