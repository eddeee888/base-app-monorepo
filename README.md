# Base App Monorepo ( BAM )

Note: This setup is for Mac, you will have to do the equivalent if you use Linux or Windows

## Overview

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [GraphQL Yoga](https://github.com/dotansimha/graphql-yoga)
- [Prisma](https://www.prisma.io/)
- [Nx](https://nx.dev/)
- [Docker](https://www.docker.com/)

### ⚡️ Get Started!

#### Set Up Networking

Set up DNS resolver to point related traffic to your host machine using the following command:

```bash
$ nx nw-cert dev # Set up TLS certificate
$ nx nw-up dev   # Set up DNS resolver
```

#### Start the app

```bash
$ nx serve main
$ nx up dev
```

#### Generate dummy data

```
$ nx init-database main-prisma
```

Once the containers have been successfully built, go to the following URLs from your favourite browser:

- `https://bam.dev`: Main app
- `https://bam.dev/api/graphql`: GraphQL endpoint

Made with ♥ by Eddy Nguyen
https://eddeee888.me
