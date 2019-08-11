#!/bin/bash

function init_packages()
{
  echo "*** Installing packages in client..."
  cd ./client && yarn

  cd - 

  echo "*** Installing packages in graphql..."
  cd ./graphql && yarn && yarn gg && yarn prisma:deploy

  cd -
}

init_packages