#!/bin/bash
function prepare_server_libs_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf services/server/lambda-layers

  echo "Creating layer ..."
  mkdir -p services/server/lambda-layers/nodejs/node_modules/@libs
  mv services/server/build/libs services/server/build/@libs

  echo "Prepare prisma client lambda layer ..."
  cp -r services/server/build/@libs services/server/lambda-layers/nodejs/node_modules

  echo "Compressing ..."
  cd services/server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_libs_lambda_layer