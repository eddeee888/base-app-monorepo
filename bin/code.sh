#!/bin/bash

function main(){
  CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
  source $CURRENT_DIR/utils/constants.sh

  case $1 in
    "")
      local cmd="${IDE_CMD} ."
    ;;
    *)
      local cmd="${IDE_CMD} ./services/$1"
    ;;
  esac

  echo "=> ${CORE_CMD_NAME}.code: "$cmd
  eval $cmd
}

main $@