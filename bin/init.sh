#!/bin/bash

set -e

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
REVERSE_PROXY_CERTIFICATE_DIR="${CURRENT_DIR}/../dev-services/reverse-proxy/certificates"
source $CURRENT_DIR/utils-constants.sh

function remove_old_symlink(){
    if [ -f $USR_BIN/$CORE_CMD_NAME ]; then
        echo "*** Removing old command..."
        sudo rm $USR_BIN/$CORE_CMD_NAME
    fi

    echo "---"
}

function setup_symlink_permission(){
    echo "*** Setting up permission..."
    sudo chmod a+rx $CURRENT_DIR/core.sh
    echo "---"
}

function symlink(){
    echo "*** Sym linking..."
    sudo ln -s $CURRENT_DIR/core.sh $USR_BIN/$CORE_CMD_NAME
    echo "---"
}

function init(){
    echo -e "Welcome to $CORE_CMD_NAME setup!"
    echo -e "========= **** =========\n"

    remove_old_symlink
    setup_symlink_permission
    symlink
    $CORE_CMD_NAME init-cert $PRIMARY_DOMAIN $REVERSE_PROXY_CERTIFICATE_DIR/primary
    yarn install

    echo -e "\nCommand has been linked!\nRun '$CORE_CMD_NAME vm-up && $CORE_CMD_NAME build-dev-image && $CORE_CMD_NAME up && nx init-database main-prisma' to initialize the project!"
}

init
