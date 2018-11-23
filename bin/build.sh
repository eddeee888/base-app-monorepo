#!/bin/bash

function rebuild(){
    local cmd="docker-compose up --build -d $1"
    echo $cmd
    eval $cmd
}

rebuild $1