# Server libs

This contains all the services that only the `server` app and crons need. This behaves differently in dev and prod:

- In dev, we build it locally for the app and they are under an alias path: `@libs*`
- In prod, we do not want to build it into the final bundle (i.e. treated as if it comes from `node_modules`) to keep the lambda lighter and truely share these libs with other lambdas e.g. crons
