#!/bin/bash

set -e

source $UTILS_CONST

function clean_images {
  docker rmi -f $PROJECT_NAME/dev
  docker rmi -f $PROJECT_NAME/dev-backend
}

function build_dev_image {
  image=$1

  docker-compose \
    --file dev-services/docker-image/build-dev-image.yml \
    --env-file=.env.docker-compose \
    build --no-cache $image
}

clean_images
build_dev_image dev
build_dev_image dev-backend
