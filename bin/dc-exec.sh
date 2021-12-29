#!/bin/bash

set -e

source $UTILS_DC

function exec(){
    local cmd="dc exec $@"
    eval $cmd
}

exec $@