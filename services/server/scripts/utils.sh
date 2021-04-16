#!/bin/bash

function dc_down() {
  echo "*** Removing containers..."
  docker-compose -f $1 down
}

function dc_run() {
  echo "*** Run ${@:2}"
  docker-compose -f $1 run ${@:2}
}

function dc_build() {
  echo "*** Build $2"
  docker-compose -f $1 build --no-cache ${2}
}