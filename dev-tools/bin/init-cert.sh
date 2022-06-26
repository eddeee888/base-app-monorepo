#!/bin/bash

set -e

function create_root_cert_and_key {
  echo "=> Creating Root CA..."

  SUBJECT="/C=AU/ST=None/L=None/O=None/CN=root.com"
  
  openssl genrsa -out $1/rootCA.key 2048
  openssl req -x509 -new -nodes -key $1/rootCA.key -subj "$SUBJECT" -sha256 -days 1024 -out $1/rootCA.pem

  echo -e "=> Successfully created Root CA!\n"
}

function create_certificate {
  echo "=> Creating certificate for \"$1\"..."

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
  
  openssl x509 \
    -req -in $2/device.csr \
    -CA $2/rootCA.pem \
    -CAkey $2/rootCA.key \
    -CAserial $2/.srl \
    -CAcreateserial \
    -out $2/device.crt \
    -days $NUM_OF_DAYS \
    -sha256 \
    -extfile /tmp/__v3.ext

  echo -e "=> Successfully created certificate for \"$1\"!\n"
}

function trust_root_ca {
  echo "=> Trusting Root CA..."
  sudo security add-trusted-cert -d -r trustRoot -k /Library/Keychains/System.keychain $1/rootCA.pem
  echo -e "=> Successfully trusted Root CA!\n"
}

function main {
  echo "=> Setting up TLS..."

  if [ ! -f $1/fullchain.pem ]; then
    echo "=> No cert detected... Creating new certs..."
    mkdir -p $2
    create_root_cert_and_key $2
    create_certificate $1 $2
    trust_root_ca $2
  else
    echo "=> Existing cert detected... Skipping cert creation."
  fi

  echo -e "=> Successfully set up certs!\n"
}

main $@
