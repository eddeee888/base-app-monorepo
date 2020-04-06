#!/bin/bash

function ws(){
    local cmd="yarn $@"
    echo $cmd
    eval $cmd
}

ws $@