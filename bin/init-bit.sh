#!/bin/bash

function setup_bit(){
    echo "*** Setting up bit.dev as package registry..."
    npm config set '@bit:registry' https://node.bit.dev
    echo "---"
}

setup_bit