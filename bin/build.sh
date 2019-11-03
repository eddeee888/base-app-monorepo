#!/bin/bash

function build(){
    local cmd="docker-compose up --build -d $1"
    echo $cmd
    eval $cmd
}

build $1