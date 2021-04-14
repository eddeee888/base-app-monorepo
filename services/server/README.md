# Server

This is the backend for our application. It is a NodeJS server running with a GraphQL endpoint. This provides the schema for our clients.

## Prisma2

After changing the prisma schema, run the following to apply changes to the database and regenerate all prisma clients:

```bash
$ bam ws prisma:dev migrate
```

The `migrate` command can be broken down into 3 steps to create the migration, applying the migration and generate client types respectively:

```bash
$ bam ws prisma:dev create <name-of-migration?>
$ bam ws prisma:dev deploy
$ bam ws prisma:dev generate
```

To init/reset/reseed the database in dev:

```bash
$ bam ws prisma:dev initdb
```

To reset the database:

```bash
$ bam ws prisma:dev reset
```

## Test

We run test in a separate container and remove it to test against a new test database each run. Each test is run one after another. Everything is wrapped in the following script:

```
$ bam ws test:server:app
```

If you want to rebuild the server image ( in case the database or packages changed ), run the same script with the `--rebuild` flag:

```
$ bam ws test:server:app --rebuild
$ bam ws test:server:app --rebuild --watchAll
$ bam ws test:server:app --rebuild --watch <pattern>
```

We do this because certain tests may require a working database to avoid mocking too many things ( e.g. prisma ). This command is useful in CI if you want a command to run all the tests.

In development, it makes sense to reuse the same test database to avoid recreating a new database all the time. You can use the following command to run tests in a container against an existing test database:

```
$ bam ws test:server:app --noreset
$ bam ws test:server:app --noreset --watchAll
$ bam ws test:server:app --noreset --watch <pattern>
```

If you have a pure function test that does not require a database, you can run your test directly on the host machine:

```
$ yarn jest
```

## How it works

In dev, we run 2 containers, one for app and one for crons.

In prod, app is deployed as one lambda and each cron is deployed as one lambda.
