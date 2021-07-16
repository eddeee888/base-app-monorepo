#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
REVERSE_PROXY_CERTIFICATE_DIR="${CURRENT_DIR}/../services/reverse-proxy/certificates"
source $CURRENT_DIR/utils/constants.sh
source $CURRENT_DIR/utils/error-exit.sh

function remove_old_symlink(){
    if [ -f $USR_BIN/$CORE_CMD_NAME ]; then
        echo "*** Removing old command..."
        sudo rm $USR_BIN/$CORE_CMD_NAME
    fi

    echo "---"
}

function setup_symlink_permission(){
    echo "*** Setting up permission..."
    sudo chmod a+rx $CURRENT_DIR/core.sh || error_exit "Unable to set up permission"
    echo "---"
}

function symlink(){
    echo "*** Sym linking..."
    sudo ln -s $CURRENT_DIR/core.sh $USR_BIN/$CORE_CMD_NAME || error_exit "Unable to sym link"
    echo "---"
}

function init(){
    echo -e "Welcome to $CORE_CMD_NAME setup!"
    echo -e "========= **** =========\n"

    remove_old_symlink
    setup_symlink_permission
    symlink
    $CORE_CMD_NAME init-cert $COMMON_NAME_CLIENT_SEO $REVERSE_PROXY_CERTIFICATE_DIR/client-seo
    $CORE_CMD_NAME init-cert $COMMON_NAME_CLIENT $REVERSE_PROXY_CERTIFICATE_DIR/client
    $CORE_CMD_NAME init-cert $COMMON_NAME_SERVER $REVERSE_PROXY_CERTIFICATE_DIR/server
    $CORE_CMD_NAME init-packages

    echo -e "\nCommand has been linked!\nRun '$CORE_CMD_NAME vm-up && $CORE_CMD_NAME up && $CORE_CMD_NAME ws prisma:dev initdb' to initialize the project!"
}

init