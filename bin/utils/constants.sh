#!/bin/bash

CORE_CMD_NAME="bam"
USR_BIN="/usr/local/bin"
TOP_LEVEL_DOMAIN="dev"
DNS_PORT=53535
DNS_CONTAINER_NAME="${TOP_LEVEL_DOMAIN}-dnsmasq" 
RESOLVER_DIR="/etc/resolver"
RESOLVER_FILE="$RESOLVER_DIR/$TOP_LEVEL_DOMAIN"
COMMON_NAME_CLIENT_SEO="bam.dev"
COMMON_NAME_CLIENT="app.bam.dev"
COMMON_NAME_SERVER="server.bam.dev"