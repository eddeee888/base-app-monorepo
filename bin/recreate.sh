#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/dc.sh

function recreate(){
    local cmd="dc rm -f -s $@ && dc up -d $@"
    eval $cmd
}

recreate $@