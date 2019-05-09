#!/bin/bash

env_path=./.env

# Check env variables
function checkEnvVariables(){
    echo "Environment variables:"
    env
    echo "=========="
}

function replaceEnvVariables(){
    sed -i -e "s~\\\$ENV{PRISMA_ENDPOINT}~${PRISMA_ENDPOINT}~g" ${env_path}
    sed -i -e "s~\\\$ENV{PRISMA_SECRET}~${PRISMA_SECRET}~g" ${env_path}
    sed -i -e "s~\\\$ENV{JWT_SECRET}~${JWT_SECRET}~g" ${env_path}
    sed -i -e "s~\\\$ENV{SERVER_NAME}~${SERVER_NAME}~g" ${env_path}
}

# Check final file
function viewEnvFile(){
    echo "Final .env file:"
    cat ${env_path}
    echo
    echo "=========="
}

function setupBit(){
    npm config set '@bit:registry' 'https://node.bitsrc.io'
    npm config set '//node.bitsrc.io/:_authToken' ${BIT_NPM_TOKEN}
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
runCmd yarn prisma deploy
runCmd yarn start