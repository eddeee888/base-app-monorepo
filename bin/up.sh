#!/bin/bash

function up(){
    local cmd="docker-compose up -d $1"
    echo $cmd
    eval $cmd
}

up $1