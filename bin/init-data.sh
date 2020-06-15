#!/bin/bash

function init_data()
{
  echo "*** Initialising data..."
  docker-compose exec server yarn prisma:generate && docker-compose exec server yarn prisma migrate up --experimental  && docker-compose exec server yarn prisma:reseed
}

init_data