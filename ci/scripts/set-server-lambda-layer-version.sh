function set_server_lambda_layer_version() {
  layer_name=$1
  output_name=$2
  
  version=$(aws lambda list-layer-versions --layer-name $1 --region us-east-1 --query 'LayerVersions[0].Version')

  echo "Latest version: $version"

  echo "::set-output name=$2::$version"
}

set_server_lambda_layer_version $@