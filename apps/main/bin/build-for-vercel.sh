#!/bin/bash

set -e

function main() {
  # Prepare Prisma package and files
  PRISMA_BINARY_TARGET='["native","rhel-openssl-3.0.x"]' yarn nx codegen main-prisma
  yarn nx build main-prisma

  mkdir -p node_modules/@airfive
  cp -R dist/libs/main-prisma/ node_modules/@airfive/main-prisma
  cp -R libs/main-prisma/src/prisma/generated/ node_modules/@airfive/main-prisma/src/prisma/generated/

  # Build app
  yarn nx build main
}

main
