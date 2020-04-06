import { Request } from "jest-express/lib/request";
import getTokenFromRequest from "./getTokenFromRequest";
import TokenType from "./TokenType";

describe("getTokenFromRequest()", () => {
  const request = new Request() as any;

  beforeEach(() => {
    request.resetMocked();
  });

  it("should get token if exists", () => {
    request.setCookies({
      [TokenType.accessToken]: "test_token",
    });

    const token = getTokenFromRequest(request);

    expect(token).toBe("test_token");
  });

  it("should get token if exists", () => {
    const token = getTokenFromRequest(request);

    expect(token).toBe(undefined);
  });
});
