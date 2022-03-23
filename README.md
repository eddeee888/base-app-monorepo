# Base App Monorepo ( BAM )

Note: This setup is for Mac, you will have to do the equivalent if you use Linux or Windows

## Overview

- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [GraphQL Helix](https://graphql-helix.vercel.app/) + [Envelop](https://www.envelop.dev/)
- [Prisma](https://www.prisma.io/)
- [Nx](https://nx.dev/)
- [Docker](https://www.docker.com/)

### 🌟 Setting up CLI (Recommended)

To start on MacOS, setting up the CLI command to make development easier. Go to the root of the project and run the init script.

For convenience, this will install packages, set up SSL, etc.

```
$ ./bin/init.sh
```

### ⚡️ Start the Apps!

Set up DNS resolver to point related traffic to your host machine using the following command:

```
$ bam vm-up
```

Create a base dev image to be shared in the apps. We do this to avoid installing packages multiple times.

```
$ bam build-dev-image
```

```
$ bam up
```

Once the containers have been successfully built, go to the following URLs from your favourite browser:

- `https://bam.dev`: SSR app
- `https://bam.dev/app/`: SPA app
- `https://bam.dev/graphql`: GraphQL endpoint

#### Generate dummy data

To create the database the first time:

```
$ bam prisma-dev initdb
```

Made with ♥ by Eddy Nguyen
https://eddeee888.me
