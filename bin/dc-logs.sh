#!/bin/bash

set -e

source $UTILS_DC

function logs(){
    local cmd="dc logs $@"
    eval $cmd
}

logs $@