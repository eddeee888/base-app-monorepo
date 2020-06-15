function prepare_server_lambda_layer() {
  echo "Creating layer ..."
  mkdir -p server/lambda-layers/nodejs

  echo "Prepare server lambda layer ..."
  cp -r server/node_modules server/lambda-layers/nodejs

  echo "Compressing ..."
  cd server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_lambda_layer