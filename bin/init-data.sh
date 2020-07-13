#!/bin/bash

function init_data()
{
  echo "*** Initialising data..."
  
  local cmd="docker-compose run --rm server yarn prisma:reseed"
  echo $cmd
  eval $cmd
}

init_data