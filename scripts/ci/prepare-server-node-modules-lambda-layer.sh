#!/bin/bash
function prepare_server_node_modules_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf services/server/lambda-layers-node_modules

  echo "Creating layer ..."
  mkdir -p services/server/lambda-layers-node_modules/nodejs

  echo "Prepare server node_modules lambda layer ..."
  cp -r services/server/node_modules services/server/lambda-layers-node_modules/nodejs

  echo "Compressing ..."
  cd services/server/lambda-layers-node_modules && tar -zcf /tmp/nodejs.tar.gz . && mv /tmp/nodejs.tar.gz ./nodejs.tar.gz

  echo "Remove unzipped files ..."
  rm -rf nodejs

  echo "Stats:"
  ls -lh nodejs.tar.gz
}

prepare_server_node_modules_lambda_layer