import { Response } from "jest-express/lib/response";
import { expiresIn } from "../jwt";
import setTokenToResponse from "./setTokenToResponse";
import { TokenType } from "./types";

describe("setTokenToResponse", () => {
  const response = new Response() as any;

  it("should call cookie function to set toke to cookie", () => {
    setTokenToResponse(response, "test_token");

    expect(response.cookie).toBeCalledTimes(1);
    expect(response.cookie).toBeCalledWith(TokenType.accessToken, "test_token", {
      maxAge: expiresIn * 1000,
      httpOnly: true,
      sameSite: "lax",
    });
  });
});
