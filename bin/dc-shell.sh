#!/bin/bash

set -e

source $UTILS_DC

function shell(){
    local cmd="dc exec $1 /bin/bash"
    eval $cmd
}

shell $1