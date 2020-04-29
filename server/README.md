# GraphQL backend

This is the backend for our application. It is a NodeJS server running with a GraphQL endpoint. This provides the schema for our clients.

To generate and deploy prisma backend:

```
yarn prisma:deploy && yarn prisma:seed
```

To generate from GraphQL schema:

```
yarn gqlgen
```
