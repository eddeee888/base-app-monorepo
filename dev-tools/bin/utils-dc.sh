#!/bin/bash

set -e

source $UTILS_CONST

function dc {
  local networking_compose_files=("dev-tools/dnsmasq/docker-compose.yml" "dev-tools/reverse-proxy/docker-compose.yml")
  local app_compose_files=("apps/main/docker-compose.yml")

  local all_compose_files=("${networking_compose_files[@]}" "${app_compose_files[@]}")
  local files=""
  for file in "${all_compose_files[@]}"
  do
	  files="$files --file $file"
  done

  local cmd="docker-compose $files --project-directory . --env-file=dev-tools/.env.docker-compose -p ${DOCKER_PROJECT_NAME} $@"
  echo "=> ${CORE_CMD_NAME}.compose: "$cmd
  eval $cmd
}
