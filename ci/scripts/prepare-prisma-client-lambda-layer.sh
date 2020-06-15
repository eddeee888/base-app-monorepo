function prepare_server_lambda_layer() {
  echo "Creating layer ..."
  mkdir -p server/lambda-layers/nodejs/node_modules/.prisma
  mkdir -p server/lambda-layers/nodejs/node_modules/@prisma

  echo "Prepare prisma client lambda layer ..."
  cp -r server/node_modules/.prisma/client server/lambda-layers/nodejs/node_modules/.prisma
  cp -r server/node_modules/@prisma server/lambda-layers/nodejs/node_modules

  echo "Compressing ..."
  cd server/lambda-layers && zip -r nodejs.zip nodejs
}

prepare_server_lambda_layer