#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/dc.sh

function stop(){
    local cmd="dc stop --timeout=1 $@"
    eval $cmd
}

stop $@