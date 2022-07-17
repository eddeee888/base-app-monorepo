#!/bin/bash

set -e

source $UTILS_CONST

function clean_images {
  docker rmi -f $PROJECT_NAME/dev
}

function build_dev_images {
  image=$1

  docker-compose \
    --file dev-tools/docker-images/build-dev-images.yml \
    build --no-cache $image
}

function main {
  clean_images
  build_dev_images dev
}

main
