#!/bin/bash

set -e

source $UTILS_DC

function start(){
    local cmd="dc start $@"
    eval $cmd
}

start $@