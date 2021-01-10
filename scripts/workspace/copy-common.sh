#!/bin/bash
function common_copy() {
  pushd services/common

  echo "*** Copying files from common..."
  yarn copy
  
  popd

  echo "*** Copying common done!"
}

common_copy