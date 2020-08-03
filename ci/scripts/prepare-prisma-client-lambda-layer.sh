#!/bin/bash
function prepare_server_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf services/server/lambda-layers
  
  echo "Creating layer ..."
  mkdir -p services/server/lambda-layers/nodejs/node_modules/.prisma
  mkdir -p services/server/lambda-layers/nodejs/node_modules/@prisma

  echo "Prepare prisma client lambda layer ..."
  cp -r services/server/node_modules/.prisma/client services/server/lambda-layers/nodejs/node_modules/.prisma
  cp -r services/server/node_modules/@prisma services/server/lambda-layers/nodejs/node_modules

  echo "Compressing ..."
  cd services/server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_lambda_layer