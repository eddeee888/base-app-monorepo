import { JWTObject, JWTPayload } from "./options";
import sign from "./sign";
import verify from "./verify";

jest.useFakeTimers();

const appOrigin = "app.com";
const graphqlEndpoint = "app.com/graphql";
const jwtSecret = "secret";

const assertToken = (token: JWTObject | null) => {
  if (!token) {
    throw new Error("Token cannot be null");
  }
  expect(token).toBeTruthy();
  expect(token.iss).toBe("app.com");
  expect(token.aud).toBe(`app.com/graphql`);
  expect(token.viewer.id).toBe("abc123");
};

describe("/helpers/utils/jwt/sign()", () => {
  const payload: JWTPayload = {
    id: "abc123",
  };
  const signParams = { appOrigin, graphqlEndpoint, jwtSecret, payload };

  it("should sign and verify token", () => {
    const token = sign(signParams);
    const verifiedToken = verify({ appOrigin, graphqlEndpoint, jwtSecret, token });

    assertToken(verifiedToken);
  });

  it("should verify token with subject", () => {
    const token = sign(signParams);
    const verifiedToken = verify({ appOrigin, graphqlEndpoint, jwtSecret, token, subject: "abc123" });

    assertToken(verifiedToken);
  });

  it("should not verify if wrong subject", () => {
    const token = sign(signParams);

    const verifiedToken = verify({ appOrigin, graphqlEndpoint, jwtSecret, token, subject: "xyz567" });

    expect(verifiedToken).toBe(null);
  });

  it("should not verify if expired payload", () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1547870585000);
    const token = sign({ ...signParams, expiresIn: 1 });

    jest.spyOn(Date, "now").mockImplementation(() => 1547870584000);
    const tokenVerifiedBeforeExpiration = verify({ appOrigin, graphqlEndpoint, jwtSecret, token });
    assertToken(tokenVerifiedBeforeExpiration);

    jest.spyOn(Date, "now").mockImplementation(() => 1547870587000);
    const tokenVerifiedAfterExpiration = verify({ appOrigin, graphqlEndpoint, jwtSecret, token });
    expect(tokenVerifiedAfterExpiration).toBe(null);
  });
});
