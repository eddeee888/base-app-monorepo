#!/bin/bash

set -e

source $UTILS_DC

function main {
  local cmd="dc exec $1 /bin/bash"
  eval $cmd
}

main $1
