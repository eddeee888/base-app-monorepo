#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/dc.sh

function shell(){
    local cmd="dc exec $1 /bin/bash"
    eval $cmd
}

shell $1