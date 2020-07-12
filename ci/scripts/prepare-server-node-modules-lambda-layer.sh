function prepare_server_node_modules_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf server/lambda-layers

  echo "Creating layer ..."
  mkdir -p server/lambda-layers/nodejs

  echo "Prepare server node_modules lambda layer ..."
  cp -r server/node_modules server/lambda-layers/nodejs

  echo "Compressing ..."
  cd server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_node_modules_lambda_layer