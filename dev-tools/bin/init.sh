#!/bin/bash

set -e

CURRENT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null && pwd )"
REVERSE_PROXY_CERTIFICATE_DIR="${CURRENT_DIR}/../reverse-proxy/certificates"
source $CURRENT_DIR/utils-constants.sh

function update_file_permissions {
  echo "=> Updating script permissions..."
  chmod +x $CURRENT_DIR/*.sh
  echo -e "=> Successfully updated script permissions!\n"
}

function remove_old_symlink {
  if [ -f $USR_BIN/$CORE_CMD_NAME ]; then
    echo "=> Removing old command..."
    sudo rm $USR_BIN/$CORE_CMD_NAME
    echo -e "=> Successfully removed old command!\n"
  fi
}

function setup_symlink_permission {
  echo "=> Setting up permissions for core command..."
  sudo chmod a+rx $CURRENT_DIR/core.sh
  echo -e "=> Successfully set up core command permissions!\n"
}

function symlink {
  echo "=> Symlinking core command..."
  sudo ln -s $CURRENT_DIR/core.sh $USR_BIN/$CORE_CMD_NAME
  echo -e "=> Successfully symlinked core command!\n"
}

function main {
  echo -e "Welcome to \"$CORE_CMD_NAME\" setup!"
  echo -e "======== **** ========\n"

  update_file_permissions
  remove_old_symlink
  setup_symlink_permission
  symlink
  $CORE_CMD_NAME init-cert $PRIMARY_DOMAIN $REVERSE_PROXY_CERTIFICATE_DIR/primary
  yarn install

  echo -e "\n=> Successfully set up \"$CORE_CMD_NAME\"!\n"
  echo -e "Run the following command to initialize the project:\n"
  echo -e "$CORE_CMD_NAME vm-up && $CORE_CMD_NAME build-dev-images && $CORE_CMD_NAME up && $CORE_CMD_NAME nx init-database main-prisma\n"
}

main
