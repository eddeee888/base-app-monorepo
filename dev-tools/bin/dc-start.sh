#!/bin/bash

set -e

source $UTILS_DC

function main {
  local cmd="dc start $@"
  eval $cmd
}

main $@
