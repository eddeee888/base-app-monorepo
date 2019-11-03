#!/bin/bash

function create_root_cert_and_key () {
    echo "*** Creating Root CA..."

    SUBJECT="/C=AU/ST=None/L=None/O=None/CN=root.com"
    
    openssl genrsa -out $1/rootCA.key 2048
    openssl req -x509 -new -nodes -key $1/rootCA.key -subj "$SUBJECT" -sha256 -days 1024 -out $1/rootCA.pem

    echo "---"
}

function create_certificate () {
    echo "*** Creating $1 certificate..."

    COMMON_NAME=$1
    SUBJECT="/C=AU/ST=Victoria/L=Melbourne/O=None/CN=$COMMON_NAME"
    NUM_OF_DAYS=365
    
    openssl req -new -newkey rsa:2048 -sha256 -nodes -keyout $2/device.key -subj "$SUBJECT" -out $2/device.csr
    echo "
        authorityKeyIdentifier=keyid,issuer
        basicConstraints=CA:FALSE
        keyUsage = digitalSignature, nonRepudiation, keyEncipherment, dataEncipherment
        subjectAltName = @alt_names

        [alt_names]
        DNS.1 = ${COMMON_NAME}
    " > /tmp/__v3.ext
    openssl x509 -req -in $2/device.csr -CA $2/rootCA.pem -CAkey $2/rootCA.key -CAcreateserial -out $2/device.crt -days $NUM_OF_DAYS -sha256 -extfile /tmp/__v3.ext

    echo "---"
}

function trust_root_ca () {
    sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $1/rootCA.pem

    echo "--- Finished setting up TLS!"
}

echo "*** Setting up TLS ***"

if [ ! -f $1/fullchain.pem ]; then
    mkdir -p $2
    create_root_cert_and_key $2
    create_certificate $1 $2
    trust_root_ca $2
fi