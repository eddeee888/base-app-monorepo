#!/bin/bash

function install_cert () {
    if [ ! -f $1/fullchain.pem ];then
        echo "*** Setting up SSL in ${1}..."
        mkdir -p $1
        openssl genrsa -out $1/privkey.pem 4096
        openssl req -new -key $1/privkey.pem -out $1/cert.csr -nodes -subj "/C=AU/ST=Victoria/L=Melbourne/CN=bra.com.vm"
        openssl x509 -req -days 365 -in $1/cert.csr -signkey $1/privkey.pem -out $1/fullchain.pem
    fi
}


install_cert $1