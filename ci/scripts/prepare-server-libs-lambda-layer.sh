function prepare_server_libs_lambda_layer() {
  echo "Cleaning up workspace ..."
  rm -rf server/lambda-layers

  echo "Creating layer ..."
  mkdir -p server/lambda-layers/nodejs/node_modules/@libs
  mv server/build/libs server/build/@libs

  echo "Prepare prisma client lambda layer ..."
  cp -r server/build/@libs server/lambda-layers/nodejs/node_modules

  echo "Compressing ..."
  cd server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_libs_lambda_layer