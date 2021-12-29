#!/bin/bash

set -e

source $UTILS_CONST

function build_dev_image {
  docker build -f $ROOT_DIR/dev-services/docker-image/Dockerfile -t $PROJECT_NAME/dev:latest .
}

build_dev_image
