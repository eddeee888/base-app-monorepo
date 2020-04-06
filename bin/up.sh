#!/bin/bash

function up(){
    local cmd="docker-compose up -d $@"
    echo $cmd
    eval $cmd
}

up $@