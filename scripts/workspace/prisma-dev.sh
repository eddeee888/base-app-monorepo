#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/../../bin/utils/dc.sh

function prisma-dev() {
  cmd=$1
  
  case $cmd in
    'initdb')
      dc run --rm server yarn prisma:migrate:reseed
      return 0
    ;;
    'reset')
      dc run --rm server yarn prisma:migrate:reset
      return 0
    ;;
    "create")
      dc exec server yarn prisma migrate dev --name=$2 --create-only --preview-feature
      return 0
    ;;
    "deploy")
      dc exec server yarn prisma:migrate:deploy
      return 0
    ;;
    "generate")
      dc exec server yarn prisma:generate:native
      dc exec server-worker yarn prisma:generate:native
      yarn prisma:generate:native
      return 0
    ;;
    'migrate')
      dc exec server yarn prisma:migrate:dev
      dc exec server-worker yarn prisma:generate:native
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