#!/bin/bash

function init_data()
{
  echo "*** Initialising data..."
  cd ./server && yarn prisma:deploy && yarn prisma:seed

  cd -
}

init_data