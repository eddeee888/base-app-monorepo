#!/bin/bash

set -e

source $UTILS_DC

function main {
  local cmd="dc stop --timeout=1 $@"
  eval $cmd
}

main $@
