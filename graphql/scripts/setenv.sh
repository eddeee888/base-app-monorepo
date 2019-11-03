#!/bin/bash

env_path=./.env

function replaceEnvVariables(){
    sed -i -e "s~\\\$ENV{PRISMA_ENDPOINT}~${PRISMA_ENDPOINT}~g" ${env_path}
    sed -i -e "s~\\\$ENV{PRISMA_SECRET}~${PRISMA_SECRET}~g" ${env_path}
    sed -i -e "s~\\\$ENV{JWT_SECRET}~${JWT_SECRET}~g" ${env_path}
    sed -i -e "s~\\\$ENV{SERVER_NAME}~${SERVER_NAME}~g" ${env_path}
    sed -i -e "s~\\\$ENV{GRAPHQL_ENDPOINT}~${GRAPHQL_ENDPOINT}~g" ${env_path}
    sed -i -e "s~\\\$ENV{AWS_S3_IMAGES_GET_SIGNED_URL}~${AWS_S3_IMAGES_GET_SIGNED_URL}~g" ${env_path}
    sed -i -e "s~\\\$ENV{AWS_S3_IMAGES_FOLDER_URL}~${AWS_S3_IMAGES_FOLDER_URL}~g" ${env_path}
    sed -i -e "s~\\\$ENV{AWS_S3_IMAGES_GET_SIGNED_URL_API_KEY}~${AWS_S3_IMAGES_GET_SIGNED_URL_API_KEY}~g" ${env_path}
}

function setupBit(){
    npm config set '@bit:registry' 'https://node.bitsrc.io'
    npm config set '//node.bitsrc.io/:_authToken' ${BIT_NPM_TOKEN}
}

replaceEnvVariables
setupBit