#!/bin/bash

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"

source $CURRENT_DIR/utils/constants.sh
source $CURRENT_DIR/utils/error_exit.sh

function remove_old_symlink(){
    if [ -f $USR_BIN/$CORE_CMD_NAME ]; then
        echo "Removing old command..."
        rm $USR_BIN/$CORE_CMD_NAME
    fi

    echo "---"
}

function setup_symlink_permission(){
    echo "Setting up permission..."
    sudo chmod a+rx $CURRENT_DIR/core.sh || error_exit "Unable to set up permission"
    echo "---"
}

function symlink(){
    echo "Sym linking..."
    sudo ln -s $CURRENT_DIR/core.sh $USR_BIN/$CORE_CMD_NAME || error_exit "Unable to sym link"
    echo "---"
}

function init(){
    echo -e "Welcome to learnd setup!"
    echo -e "========= **** =========\n"

    remove_old_symlink
    setup_symlink_permission
    symlink

    echo -e "\nCommand has been linked!\nTry '$CORE_CMD_NAME build' to build the project!"
}

init