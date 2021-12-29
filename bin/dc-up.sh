#!/bin/bash

set -e

source $UTILS_DC

function up(){
    local cmd="dc up -d $@"
    eval $cmd
}

up $@