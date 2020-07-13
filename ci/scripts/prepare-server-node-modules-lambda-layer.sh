function prepare_server_node_modules_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf services/server/lambda-layers

  echo "Creating layer ..."
  mkdir -p services/server/lambda-layers/nodejs

  echo "Prepare server node_modules lambda layer ..."
  cp -r services/server/node_modules services/server/lambda-layers/nodejs

  echo "Compressing ..."
  cd services/server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_node_modules_lambda_layer