#!/bin/bash

# Replace 1 variable $ENV{<environment varname>}
function replaceEnvVariable() {
    grep -rl "\$ENV{$1}" $3|xargs -r sed -i "s|\\\$ENV{$1}|$2|g"
}
# Replace ALL variables
function replaceAllEnvVariables(){
    # Replace all environment variable in config file
    for _curVar in `env | awk -F = '{print $1}'`;do
        # awk has split them by the equals sign
        # Pass the name and value to our function
        replaceEnvVariable ${_curVar} ${!_curVar} /etc/nginx/conf.d/http.conf
    done
}

# Run nginx 
function runNginx(){
    local cmd="nginx -g 'daemon off;'"
    echo "$ $cmd"
    eval $cmd
}

replaceAllEnvVariables
runNginx