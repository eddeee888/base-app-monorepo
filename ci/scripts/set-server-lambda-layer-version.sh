#!/bin/bash
function set_server_lambda_layer_version() {
  layer_name=$1
  output_name=$2
  aws_region=$3
  
  version=$(aws lambda list-layer-versions --layer-name $layer_name --region $aws_region --query 'LayerVersions[0].Version' 2> /dev/null )

  if [[ $version != "" ]]; then
    echo "Latest version: $version"
    echo "::set-output name=$output_name::$version"
  else
    echo "Failed to get layer version... Exiting."
    exit 1
  fi
}

set_server_lambda_layer_version $@