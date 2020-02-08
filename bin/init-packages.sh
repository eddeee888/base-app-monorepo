#!/bin/bash

function init_packages()
{
  echo "*** Installing packages in client..."
  cd ./client && yarn
  cd - 
  echo ""
  echo "---"

  echo "*** Installing packages and build in graphql..."
  cd ./server && yarn && yarn gg && yarn prisma:generate && yarn build
  cd -
  echo ""
  echo "---"
}

init_packages