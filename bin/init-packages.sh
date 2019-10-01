#!/bin/bash

function init_packages()
{
  echo "*** Installing packages in client..."
  cd ./client && yarn
  cd - 
  echo ""
  echo "---"

  echo "*** Installing packages in graphql..."
  cd ./graphql && yarn && yarn gg && yarn prisma:generate
  cd -
  echo ""
  echo "---"
}

init_packages