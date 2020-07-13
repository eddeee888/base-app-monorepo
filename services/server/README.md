# Server

This is the backend for our application. It is a NodeJS server running with a GraphQL endpoint. This provides the schema for our clients.

## Prisma2

After changing the prisma schema, run the following:

```bash
$ bam run server yarn prisma migrate save --name migration-name --experimental
$ bam run server yarn prisma:migrate:up
$ bam run server yarn prisma:generate:dev
$ bam run server-worker yarn prisma:generate:dev
```

Note that the previous commands update the container. Run the following to update the binary type on the host machine:

```bash
$ bam ws prisma:generate:dev
```

To seed the database in dev:

```
$ bam init-data
```

## How it works

In dev, we run 2 containers, one for app and one for crons.

In prod, app is deployed as one lambda and each cron is deployed as one lambda.
