#!/bin/bash

set -e

source $UTILS_DC

function down(){
    local cmd="dc down"
    eval $cmd
}

down