#!/bin/bash
function prisma-dev() {
  cmd=$1
  
  case $cmd in
    'initdb')
      docker-compose run --rm server yarn prisma:migrate:reseed
      return 0
    ;;
    'reset')
      docker-compose run --rm server yarn prisma:migrate:reset
      return 0
    ;;
    "create")
      docker-compose exec server yarn prisma migrate dev --name=$2 --create-only --preview-feature
      return 0
    ;;
    "deploy")
      docker-compose exec server yarn prisma:migrate:deploy
      return 0
    ;;
    "generate")
      docker-compose exec server yarn prisma:generate:native
      docker-compose exec server-worker yarn prisma:generate:native
      yarn prisma:generate:native
      return 0
    ;;
    'migrate')
      docker-compose exec server yarn prisma:migrate:dev
      docker-compose exec server-worker yarn prisma:generate:native
      yarn prisma:generate:native
      return 0
    ;;
  esac

  echo "ERROR: Wrong command - try one of the following commands:"
  echo "yarn prisma:dev initdb"
  echo "yarn prisma:dev reset"
  echo "yarn prisma:dev create <name-of-migration?>"
  echo "yarn prisma:dev deploy"
  echo "yarn prisma:dev generate"
  echo "yarn prisma:dev migrate"
  return 1
}

prisma-dev $@