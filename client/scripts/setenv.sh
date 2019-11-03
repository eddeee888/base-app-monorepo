env_path=./.env

function replaceEnvVariables(){
    sed -i -e "s~\\\$ENV{GRAPHQL_ENDPOINT}~${GRAPHQL_ENDPOINT}~g" ${env_path}
    sed -i -e "s~\\\$ENV{GOOGLE_API_KEY}~${GOOGLE_API_KEY}~g" ${env_path}
}

function setupBit(){
    npm config set '@bit:registry' 'https://node.bitsrc.io'
    npm config set '//node.bitsrc.io/:_authToken' ${BIT_NPM_TOKEN}
}

replaceEnvVariables
setupBit
