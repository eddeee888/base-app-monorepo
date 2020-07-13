function install_gcg() {
  yarn add -D \
    @graphql-codegen/add@$1 \
    @graphql-codegen/typescript@$1 \
    @graphql-codegen/typescript-resolvers@$1 \
    @graphql-codegen/cli@$1 \
    
}

install_gcg $@