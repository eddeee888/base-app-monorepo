#!/bin/bash

set -e

source $UTILS_DC

function main {
  local cmd="dc rm -f -s $@ && dc build --no-cache $@"
  eval $cmd
}

main $@
