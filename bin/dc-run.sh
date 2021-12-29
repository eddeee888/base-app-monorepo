#!/bin/bash

set -e

source $UTILS_DC

function run(){
    local cmd="dc run $@"
    eval $cmd
}

run $@