import { LoginPayloadResolvers } from 'src/web/graphql/generated/graphqlgen';

export const LoginPayload: LoginPayloadResolvers.Type = {
  ...LoginPayloadResolvers.defaultResolvers
};
