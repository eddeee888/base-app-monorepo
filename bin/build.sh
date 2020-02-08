#!/bin/bash

function build(){
    local cmd="docker-compose build $@"
    echo $cmd
    eval $cmd
}

build $@