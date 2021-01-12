#!/bin/bash
function prepare_server_libs_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf services/server/lambda-layers-libs

  echo "Creating layer ..."
  mkdir -p services/server/lambda-layers-libs/nodejs/node_modules/@libs
  mv services/server/build/libs services/server/build/@libs

  echo "Prepare prisma client lambda layer ..."
  cp -r services/server/build/@libs services/server/lambda-layers-libs/nodejs/node_modules

  echo "Compressing ..."
  cd services/server/lambda-layers-libs && tar -zcf /tmp/nodejs.tar.gz . && mv /tmp/nodejs.tar.gz ./nodejs.tar.gz

  echo "Remove unzipped files ..."
  rm -rf nodejs

  echo "Stats:"
  ls -lh nodejs.tar.gz
}

prepare_server_libs_lambda_layer