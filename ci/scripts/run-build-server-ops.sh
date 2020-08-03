#!/bin/bash
function run_build_server_ops() {
  pushd services/server/ops

  yarn install --frozen-lockfile

  yarn build
  
  popd
}

run_build_server_ops