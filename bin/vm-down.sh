#!/bin/bash

set -e

source $UTILS_CONST

function remove_resolver_file {
  if [ -e $RESOLVER_FILE ]; then 
    echo "-> Removing old resolver file $RESOLVER_FILE ..."
    sudo rm $RESOLVER_FILE
    echo ""
  fi
}

remove_resolver_file
$CORE_CMD_NAME stop
