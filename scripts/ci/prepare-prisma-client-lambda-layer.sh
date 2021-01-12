#!/bin/bash
function prepare_server_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf services/server/lambda-layers-prisma-client
  
  echo "Creating layer ..."
  mkdir -p services/server/lambda-layers-prisma-client/nodejs/node_modules/.prisma
  mkdir -p services/server/lambda-layers-prisma-client/nodejs/node_modules/@prisma

  echo "Prepare prisma client lambda layer ..."
  cp -r services/server/node_modules/.prisma/client services/server/lambda-layers-prisma-client/nodejs/node_modules/.prisma
  cp -r services/server/node_modules/@prisma services/server/lambda-layers-prisma-client/nodejs/node_modules

  echo "Remove prisma CLI..."
  rm -rf services/server/lambda-layers-prisma-client/nodejs/node_modules/@prisma/cli

  echo "Compressing ..."
  cd services/server/lambda-layers-prisma-client && tar -zcf /tmp/nodejs.tar.gz . && mv /tmp/nodejs.tar.gz ./nodejs.tar.gz

  echo "Remove unzipped files ..."
  rm -rf nodejs

  echo "Stats:"
  ls -lh nodejs.tar.gz
}

prepare_server_lambda_layer