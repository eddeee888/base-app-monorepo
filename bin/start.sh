#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/dc.sh

function start(){
    local cmd="dc start $@"
    eval $cmd
}

start $@