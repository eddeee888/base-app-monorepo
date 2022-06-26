#!/bin/bash

set -e

source $UTILS_DC

function main {
  local cmd="dc up -d $@"
  eval $cmd
}

main $@
