import { convertDisplayName } from "@libs/models/user";
import { gql, GraphQLClient } from "graphql-request";
import { setupTestServerConfig } from "@/tests/testServer";

const config = setupTestServerConfig();

describe("query user resolver", () => {
  it("should get public user data if no user is logged in", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          id
          displayName
        }
      }
    `;

    const { user } = await config.fixtures.User.user();

    const client = new GraphQLClient(config.url);
    const result = await client.request(query, { id: user.id });

    expect(result.user).toEqual({
      id: user.id.toString(),
      displayName: convertDisplayName({ firstName: user.firstName, lastName: user.lastName }),
    });
  });

  it("should get public user data if logged in user is viewing other user's data", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          id
          displayName
        }
      }
    `;

    const { user } = await config.fixtures.User.user();
    const viewer = await config.fixtures.User.user();

    const client = new GraphQLClient(config.url, { headers: { cookie: viewer.tokenCookie } });
    const result = await client.request(query, { id: user.id });

    expect(result.user).toEqual({
      id: user.id.toString(),
      displayName: convertDisplayName({ firstName: user.firstName, lastName: user.lastName }),
    });
  });

  it("should get public user data if logged in user is admin and viewing other user's data", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          id
          displayName
        }
      }
    `;

    const { user } = await config.fixtures.User.user();
    const viewer = await config.fixtures.User.user();

    const client = new GraphQLClient(config.url, { headers: { cookie: viewer.tokenCookie } });
    const result = await client.request(query, { id: user.id });

    expect(result.user).toEqual({
      id: user.id.toString(),
      displayName: convertDisplayName({ firstName: user.firstName, lastName: user.lastName }),
    });
  });

  it("should fail to get private user data if no user is logged in", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          firstName
        }
      }
    `;

    const { user } = await config.fixtures.User.user();

    const client = new GraphQLClient(config.url);

    await expect(client.request(query, { id: user.id })).rejects.toThrow();
  });

  it("should fail to get private user data if normal user is viewing other user's private data", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          firstName
        }
      }
    `;

    const { user } = await config.fixtures.User.user();
    const viewer = await config.fixtures.User.user();

    const client = new GraphQLClient(config.url, { headers: { cookie: viewer.tokenCookie } });

    await expect(client.request(query, { id: user.id })).rejects.toThrow();
  });

  it("should get private user data if logged in is viewing their own data", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          firstName
        }
      }
    `;

    const { user, tokenCookie } = await config.fixtures.User.user();

    const client = new GraphQLClient(config.url, { headers: { cookie: tokenCookie } });
    const result = await client.request(query, { id: user.id });

    expect(result.user).toEqual({ firstName: user.firstName });
  });

  it("should get private user data if admin is logged in and viewing other user's data", async () => {
    const query = gql`
      query User($id: ID!) {
        user(id: $id) {
          firstName
        }
      }
    `;

    const { user } = await config.fixtures.User.user();
    const viewer = await config.fixtures.User.admin();

    const client = new GraphQLClient(config.url, { headers: { cookie: viewer.tokenCookie } });
    const result = await client.request(query, { id: user.id });

    expect(result.user).toEqual({ firstName: user.firstName });
  });
});
