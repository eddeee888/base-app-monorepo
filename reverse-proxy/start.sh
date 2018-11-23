#!/bin/bash

config_path=${REVERSE_PROXY_CONTAINER_CONFIG_PATH}

# Check env variables
function checkEnvVariables(){
    echo "Environment variables:"
    env
    echo "=========="
}

# Replace 1 variable $ENV{<environment varname>}
function replaceEnvVariable() {
    grep -rl "\$ENV{$1}" $3|xargs -r \
        sed -i "s|\\\$ENV{$1}|$2|g"
}

# Replace ALL variables
function replaceAllEnvVariables(){
    # Replace all environment variable in config file
    for _curVar in `env | awk -F = '{print $1}'`;do
        # awk has split them by the equals sign
        # Pass the name and value to our function
        replaceEnvVariable ${_curVar} ${!_curVar} ${config_path}
    done
}

# Check final file
function viewConfigFile(){
    echo "Final config file:"
    cat ${config_path}
    echo "=========="
}

# Run nginx 
function runNginx(){
    local cmd="nginx -g 'daemon off;'"
    echo "$ $cmd"
    eval $cmd
}

checkEnvVariables
replaceAllEnvVariables
viewConfigFile
runNginx