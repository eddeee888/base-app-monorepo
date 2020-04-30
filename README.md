# Base App Monorepo

Note: This setup is for Mac, you will have to do the equivalent if you use Linux or Windows

## Overview

- Runs on Docker. More on Docker [here](./docs/DOCKER.md).
- Stack: React, GraphQL, Apollo Server, Prisma and TypeScript. More on the stack [here](./docs/STACK.md)
- Routes are managed and generated for all apps by [route-codegen](https://github.com/eddeee888/route-codegen)
- Monorepo setup with Yarn workspaces
- Has scripts to set up and run main app commands. All scripts are located [here](./bin/)

### 🌟 Setting up CLI (Recommended)

To start on MacOS, setting up the CLI command to make development easier. Go to the root of the project and run the init script.

For convenience, this will install packages, set up SSL and docker-machine.

```
$ ./bin/init.sh
```

More on how it works [here](./docs/INIT.md)

### ⚡️ Start the App!

#### Set up the Docker environment

We use Docker machine since it gives us better performance compared to Docker for Mac. We create the machine and DNS resolver using the following command:

```
$ bam vm-up
```

Then, we switch into the docker-machine environment by running:

```
$ eval $(docker-machine env bam)
```

Running `docker` commands should now work. For example:

```
$ docker ps
```

#### Sharing commons

To keep things simple, we do not share common components/functions/settings via published npm packages. Instead, `/common` serves as the place where commons live. When changes happen in source folders, they would get copied into target folders. Settings can be found and extended [here](./common/watcher.js#L13-L20). To start, run the following:

```
$ bam ws common:watch
```

#### Turn on the containers the first time

```
$ bam build
$ bam up
```

Once they have successfully built, go to the following URL from your favourite browser:

```
https://bam.com.vm/
```

#### Generate dummy data

Here's the script to generate some dummy data to get started!

```
$ bam init-data
```

#### Turn off everything

```
$ bam vm-down
```

### Routing

It is easy to make mistake when routing between multiple apps. Inner-app routing can be done with client-side routing while inter-app routing must be done with server-side routing. That is why we are using `route-codegen` manage routing between all apps.

The config can be found [here](./route-manager/route-codegen.yml). After making changes, run the following to generate route modules:

```
bam ws routegen
```

Read more about [route-codegen](https://github.com/eddeee888/route-codegen)

Made with ♥ by Eddy Nguyen
https://eddy.works
