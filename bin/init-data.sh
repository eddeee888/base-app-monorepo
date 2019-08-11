#!/bin/bash

function init_data()
{
  echo "*** Initialising data..."
  cd ./graphql && yarn prisma:deploy && yarn prisma:seed

  cd -
}

init_data