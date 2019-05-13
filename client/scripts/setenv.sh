env_path=./.env

function replaceEnvVariables(){
    sed -i -e "s~\\\$ENV{GRAPHQL_END_POINT}~${GRAPHQL_END_POINT}~g" ${env_path}
}

function setupBit(){
    npm config set '@bit:registry' 'https://node.bitsrc.io'
    npm config set '//node.bitsrc.io/:_authToken' ${BIT_NPM_TOKEN}
}

replaceEnvVariables
setupBit
