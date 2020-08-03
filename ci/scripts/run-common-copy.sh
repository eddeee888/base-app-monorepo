#!/bin/bash
function run_common_copy() {
  pushd services/common

  echo "*** Copying files from common..."
  yarn copy
  
  popd

  echo "*** Copying common done!"
}

run_common_copy