#!/bin/bash

set -e

function main() {
  nx codegen main-prisma
  nx graphql-codegen graph-backend

  nx build main

  cp apps/main/.env.e2e dist/apps/main/.env
  cp -R node_modules/ dist/apps/main/node_modules

  # Prepare Prisma package and files
  mkdir -p dist/apps/main/node_modules/@bam
  cp -R dist/libs/main-prisma/ dist/apps/main/node_modules/@bam/main-prisma
  cp -R libs/main-prisma/src/prisma/generated/ dist/apps/main/node_modules/@bam/main-prisma/src/prisma/generated/
}

main
