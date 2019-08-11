# Base React App

Note: This setup is for Mac, you will have to do the equivalent if you use Linux or Windows

## Overview

- Runs on Docker. More on Docker [here](./docs/DOCKER.md).
- Stack: React, GraphQL, Express, Prisma and TypeScript. More on the stack [here](./docs/STACK.md)
- Has scripts to set up and run main app commands. All scripts are located [here](./bin/)

### 🌟 Setting up CLI (Recommended)

To start on MacOS, setting up the CLI command to make development easier. Go to the root of the project and run the init script. 

For convinience, this will install packages in `client` and `graphql` folders and SSL for the webapp.

```
~/base-react-app/bin/init.sh
```

More on how it works [here](./docs/INIT.md)

### ⚡️ Start the App!

#### Set up a custom DNS resolver

To use custom domain to simulate a real web app, run the following to create a custom DNS resolver:

```
$ bra vm-up
```

#### Turn on the containers the first time

```
$ bra build
```

Check the logs in your `client` and `graphql` containers:

```
$ bra logs -f client
```

```
$ bra logs -f graphql
```

Once they have successfully built, go to the following URL from your favourite browser:

```
https://learnd.com.vm/
```

#### Generate dummy data

Here's the script to generate some dummy data to get started!

```
$ bra init-data
```

#### Start containers without building

```
$ bra start
```

#### Turn off everything

```
$ bra vm-down
```

Made with ♥ by Eddy Nguyen
https://eddy.works
