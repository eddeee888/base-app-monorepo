#!/bin/bash

function init_packages()
{
  echo "*** Installing packages..."
  yarn install
  echo "---"
}

init_packages