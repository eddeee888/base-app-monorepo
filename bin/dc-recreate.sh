#!/bin/bash

set -e

source $UTILS_DC

function recreate(){
    local cmd="dc rm -f -s $@ && dc up -d $@"
    eval $cmd
}

recreate $@