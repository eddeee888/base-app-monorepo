#!/bin/bash

env_path=./.env

# Check env variables
function checkEnvVariables(){
    echo "Environment variables:"
    env
    echo "=========="
}

function replaceEnvVariables(){
    sed -i -e "s~\\\$ENV{GRAPHQL_END_POINT}~${GRAPHQL_END_POINT}~g" ${env_path}
}

function setupBit(){
    npm config set '@bit:registry' 'https://node.bitsrc.io'
    npm config set '//node.bitsrc.io/:_authToken' ${BIT_NPM_TOKEN}
}

# Check final file
function viewEnvFile(){
    echo "Final .env file:"
    cat ${env_path}
    echo
    echo "=========="
}

function runCmd(){
    local cmd=$@
    echo "$ $cmd"
    eval $cmd
}

checkEnvVariables
replaceEnvVariables
viewEnvFile

setupBit

runCmd apk update && apk add bash && rm -rf /var/cache/apk/*
runCmd yarn install 
runCmd yarn start