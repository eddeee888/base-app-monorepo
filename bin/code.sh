#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
source $CURRENT_DIR/utils/constants.sh

function main(){
  local cmd="${IDE_CMD} ./services/$1"
  echo "=> ${CORE_CMD_NAME}.code: "$cmd
  eval $cmd
}

main $@