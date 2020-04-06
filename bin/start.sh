#!/bin/bash

function start(){
    local cmd="docker-compose start $@"
    echo $cmd
    eval $cmd
}

start $@