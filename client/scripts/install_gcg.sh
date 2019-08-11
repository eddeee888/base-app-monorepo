function install_gcg() {
  echo 
  yarn add -D @graphql-codegen/typescript@$1 @graphql-codegen/cli@$1 @graphql-codegen/near-operation-file-preset@$1 @graphql-codegen/typescript-operations@$1 @graphql-codegen/typescript-react-apollo@$1 @graphql-codegen/visitor-plugin-common@$1
}

install_gcg $@