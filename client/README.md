This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

This is the front end SPA codebase for our app. This uses schema generated from our `graphql` endpoint.

To generate schema, make sure `graphql` container is running, then run the following:

1. Build plugin for `graphql-code-generator`. This only needs to be run once

```
yarn gg:build-plugin
```

2. Run script to generate types

```
yarn gg
```
