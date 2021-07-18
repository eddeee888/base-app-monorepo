import { createHeadersService } from "@libs/headersService";
import { createJwtService } from "@libs/jwtService";
import { createPasswordService } from "@libs/passwordService";
import { createPrismaClient } from "@libs/prismaClient";
import createServers from "./createServers";
import { env } from "./env";

const PORT = env.PORT;
const STAGE = env.NODE_ENV;

// Create services
const password = createPasswordService();
const prisma = createPrismaClient({ mode: STAGE });
const headers = createHeadersService({ primaryDomain: env.PRIMARY_DOMAIN });
const jwt = createJwtService({
  appOrigin: env.APP_ORIGIN,
  graphqlEndpoint: env.GRAPHQL_ENDPOINT,
  jwtSecret: env.JWT_SECRET,
});

createServers({
  stage: STAGE,
  corsOptions: {
    origin: [`https://${env.CLIENT_SERVICE_DOMAIN}`, `https://${env.CLIENT_SEO_SERVICE_DOMAIN}`],
    credentials: true,
  },
  services: {
    prismaClient: prisma,
    passwordService: password,
    headersService: headers,
    jwtService: jwt,
  },
}).then(({ apolloServer, expressServer }) => {
  expressServer.listen({ port: PORT }, () => {
    console.log(`🚀 Server ready at http://localhost:${PORT}${apolloServer.graphqlPath}`);
  });
});
