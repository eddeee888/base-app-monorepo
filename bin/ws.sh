#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/constants.sh

function ws(){
    local cmd="yarn $@"
    echo "=> ${CORE_CMD_NAME}.ws: "$cmd
    eval $cmd
}

ws $@