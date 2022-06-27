#!/bin/bash

set -e

source $UTILS_DC

function main {
  local cmd="dc run $@"
  eval $cmd
}

main $@
