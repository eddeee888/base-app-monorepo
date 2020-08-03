#!/bin/bash
function find_ecr_image() {
  repository_name=$1
  image_tag=$2
  
  IMAGE_META="$( aws ecr describe-images --repository-name=$repository_name --image-ids=imageTag=$image_tag 2> /dev/null )"

  if [[ $? == 0 ]]; then
      echo "$repository_name:$image_tag found"
  else
      echo "$repository_name:$image_tag not found... Exiting."
      exit 1
  fi
}

find_ecr_image $@