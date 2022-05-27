#!/bin/bash

set -e

function main() {
  nx codegen main-prisma
  nx graphql-codegen graph-backend

  # Prepare Prisma package and files
  mkdir -p node_modules/@bam
  cp -R dist/libs/main-prisma/ node_modules/@bam/main-prisma
  cp -R libs/main-prisma/src/prisma/generated/ node_modules/@bam/main-prisma/src/prisma/generated/

  nx build main
}

main
