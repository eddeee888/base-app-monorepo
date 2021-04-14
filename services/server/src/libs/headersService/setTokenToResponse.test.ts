import { Response } from "jest-express/lib/response";
import setTokenToResponse from "./setTokenToResponse";
import { TokenType } from "./types";
import { expiresIn } from "../jwtService";

describe("setTokenToResponse", () => {
  const response = new Response() as any;

  it("should call cookie function to set toke to cookie", () => {
    setTokenToResponse(response, "test_token", "app.com");

    expect(response.cookie).toBeCalledTimes(1);
    expect(response.cookie).toBeCalledWith(TokenType.accessToken, "test_token", {
      maxAge: expiresIn * 1000,
      httpOnly: true,
      sameSite: "lax",
      secure: true,
      domain: "app.com",
    });
  });
});
