#!/bin/bash

set -e

function main() {
  # Prepare Prisma package and files
  yarn nx codegen main-prisma
  yarn nx build main-prisma

  yarn nx build main

  cp apps/main/.env.e2e dist/apps/main/.env
  cp -R node_modules/ dist/apps/main/node_modules

  # Prepare Prisma package and files
  mkdir -p dist/apps/main/node_modules/@airfive
  cp -R dist/libs/main-prisma/ dist/apps/main/node_modules/@airfive/main-prisma
  cp -R libs/main-prisma/src/prisma/generated/ dist/apps/main/node_modules/@airfive/main-prisma/src/prisma/generated/
}

main
