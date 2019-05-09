#!/bin/bash

function logs(){
    local cmd="docker-compose logs $@"
    echo $cmd
    eval $cmd
}

logs $@