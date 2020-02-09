function set_up_bit(){
    npm config set '@bit:registry' 'https://node.bit.dev'
    npm config set '//node.bitsrc.io/:_authToken' $1
    npm config set '//node.bit.dev/:_authToken' $1
}
set_up_bit $1
