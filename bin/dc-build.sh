#!/bin/bash

set -e

source $UTILS_DC

function build(){
    local cmd="dc build $@"
    eval $cmd
}

build $@