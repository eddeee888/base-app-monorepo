#!/bin/bash

set -e

source $UTILS_DC

function rebuild(){
    local cmd="dc rm -f -s $@ && dc build --no-cache $@"
    eval $cmd
}

rebuild $@