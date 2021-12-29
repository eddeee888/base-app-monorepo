#!/bin/bash

set -e

source $UTILS_DC

function stop(){
    local cmd="dc stop --timeout=1 $@"
    eval $cmd
}

stop $@