import { Request } from "jest-express/lib/request";
import { Response } from "jest-express/lib/response";
import { TokenType, createHeadersService } from "@libs/headersService";
import { createJwtService, JWTPayload } from "@libs/jwtService";
import tokenVerifier from "./tokenVerifier";

describe("tokenVerifier middleware", () => {
  const jwt = createJwtService({
    appOrigin: "domain.com",
    graphqlEndpoint: "domain.com/graphql",
    jwtSecret: "supersecret",
  });
  const headers = createHeadersService({
    primaryDomain: "domain.com",
  });
  const request = new Request() as any;
  const response = new Response() as any;
  const next = jest.fn();

  const payload: JWTPayload = {
    id: "abc123",
  };

  const token = jwt.sign(payload);
  const verifiedToken = jwt.verify(token);

  afterEach(() => {
    request.resetMocked();
    response.resetMocked();
    next.mockReset();
  });

  it("should reset token, set user and call next if token is valid", async () => {
    expect.assertions(4);

    request.setCookies({
      [TokenType.accessToken]: token,
    });

    await tokenVerifier({ headers, jwt })(request, response, next);

    expect(verifiedToken).toBeTruthy();
    if (verifiedToken) {
      expect(verifiedToken.viewer).toEqual(payload);
    }
    expect(next).toHaveBeenCalledTimes(1);
    expect(response.cookie).toHaveBeenCalledTimes(1);
  });

  it("should not reset token if no token given", async () => {
    expect.assertions(2);

    await tokenVerifier({ headers, jwt })(request, response, next);

    expect(response.cookie).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenCalledTimes(1);
  });

  it("should not reset token if invalid token given", async () => {
    expect.assertions(2);

    request.setCookies({
      [TokenType.accessToken]: "RANDOM TOKEN",
    });

    await tokenVerifier({ headers, jwt })(request, response, next);

    expect(response.cookie).toHaveBeenCalledTimes(0);
    expect(next).toHaveBeenCalledTimes(1);
  });
});
