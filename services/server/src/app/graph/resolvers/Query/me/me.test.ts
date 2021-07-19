import { gql, GraphQLClient } from "graphql-request";
import { setupTestServerConfig } from "@/tests/testServer";

const config = setupTestServerConfig();

describe("query me resolver", () => {
  it("should return null if not logged in", async () => {
    const query = gql`
      query Me {
        me {
          id
          firstName
          lastName
        }
      }
    `;

    const { user } = await config.fixtures.user.user();

    const client = new GraphQLClient(config.url);
    const result = await client.request(query, { id: user.id });

    expect(result.me).toBeNull();
  });

  it("should return user data if logged in", async () => {
    const query = gql`
      query Me {
        me {
          id
          firstName
          lastName
        }
      }
    `;

    const { user, tokenCookie } = await config.fixtures.user.user();

    const client = new GraphQLClient(config.url, { headers: { cookie: tokenCookie } });
    const result = await client.request(query, { id: user.id });

    expect(result.me).toEqual({
      id: user.id.toString(),
      firstName: user.firstName,
      lastName: user.lastName,
    });
  });
});
