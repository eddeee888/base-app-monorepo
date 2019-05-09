import { SignupPayloadResolvers } from 'src/web/graphql/generated/graphqlgen';

export const SignupPayload: SignupPayloadResolvers.Type = {
  ...SignupPayloadResolvers.defaultResolvers
};
