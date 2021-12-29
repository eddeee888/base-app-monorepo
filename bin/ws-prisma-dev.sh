#!/bin/bash

set -e

# We need this custom script hack because:
# 1. Prisma `migrate dev` does not work in Docker container
#    https://github.com/prisma/prisma/issues/7113
# 2. Nx does not handle some passed args correctly e.g. `--create-only` becomes `--createOnly`
#    https://github.com/nrwl/nx/issues/2846 

source $UTILS_DC

function prisma-dev() {
  cmd=$1
  schema_flag="--schema=./apps/graph/src/prisma/schema.prisma"
  seed_script="apps/graph/src/prisma/seed.ts"

  export PRISMA_DATABASE_URL=mysql://root:root@bam.dev:3306/bam?schema=public
  export PRISMA_BINARY_TARGET="[\"native\"]"
  # export DEBUG="*"
  
  case $cmd in
    "initdb")
      # bam prisma-dev initdb
      yarn prisma migrate reset $schema_flag
      yarn ts-node --compiler-options {\"module\":\"CommonJS\"} $seed_script
      return 0
    ;;
    "create")
      # bam prisma-dev create <migration-name>
      yarn prisma migrate dev $schema_flag --name=$2 --create-only
      return 0
    ;;
    "apply")
      # bam prisma-dev apply
      yarn prisma migrate dev $schema_flag --skip-generate
      return 0
    ;;
    "generate")
      # bam prisma-dev generate
      yarn prisma generate $schema_flag
      dc exec graph yarn prisma generate $schema_flag
      return 0
    ;;
  esac

  echo "ERROR: Wrong command - try one of the following commands:"
  echo "bam prisma-dev initdb"
  echo "bam prisma-dev create <migration-name?>"
  echo "bam prisma-dev deploy"
  echo "bam prisma-dev generate"
  return 1
}

prisma-dev $@