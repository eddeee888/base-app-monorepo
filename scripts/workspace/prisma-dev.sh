#!/bin/bash
function prisma-dev() {
  cmd=$1
  
  case $cmd in
    'initdb')
      docker-compose run --rm server yarn prisma:reseed
      return 0
    ;;
    'migrate:create')
      if [ -z "$2" ]; then
        echo "ERROR: Missing migration name. Try \"yarn prisma:dev migrate:create migration-name\""
        return 1
      fi

      docker-compose exec server yarn prisma migrate save --experimental --name $2
      return 0
    ;;
    'migrate:up')
      docker-compose exec server yarn prisma:migrate:up
      docker-compose exec server yarn prisma:generate:dev
      docker-compose exec server-worker yarn prisma:generate:dev
      yarn prisma:generate:dev
      return 0
    ;;
  esac

  echo "ERROR: Wrong command - try on of the following commands:"
  echo "yarn prisma:dev initdb"
  echo "yarn prisma:dev migrate:create"
  echo "yarn prisma:dev migrate:up"
  return 1
}

prisma-dev $@