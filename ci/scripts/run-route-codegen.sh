#!/bin/bash
function run_route_codegen() {
  environment=$1

  if [[ $environment != dev ]] && [[ $environment != prod ]]
  then
    echo "!!! Environment must be 'dev' or 'prod'"
    exit 1
  fi

  domain=$([ "$environment" == dev ] && echo "bam.dev" || echo "bam.com")
  
  echo "*** Cleaning old routes..."
  yarn routegen:clean
  
  pushd services/route-manager

  yarn install --frozen-lockfile

  echo "*** Generating new routes..."
  PRIMARY_DOMAIN=$domain yarn route-codegen --verbose --stacktrace
  
  popd

  if [[ $environment = dev ]]
  then
    echo "*** Formating routes..."
    yarn routegen:format
  fi

  echo "*** route-codegen done!"
}

run_route_codegen $@