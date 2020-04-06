import { JWTObject, JWTPayload } from "./options";
import sign from "./sign";
import verify from "./verify";

jest.useFakeTimers();

const assertToken = (token: JWTObject | null) => {
  expect(token).toBeTruthy();
  if (token) {
    expect(token.iss).toBe(process.env.SERVER_NAME);
    expect(token.aud).toBe(`${process.env.SERVER_NAME}/graphql`);
    expect(token.viewer.id).toBe("abc123");
  }
};

describe("/helpers/utils/jwt/sign()", () => {
  const payload: JWTPayload = {
    id: "abc123",
  };

  it("should sign and verify token", () => {
    const token = sign(payload);
    const verifiedToken = verify(token);

    assertToken(verifiedToken);
  });

  it("should verify token with subject", () => {
    const token = sign(payload);
    const verifiedToken = verify(token, "abc123");

    assertToken(verifiedToken);
  });

  it("should not verify if wrong subject", () => {
    const token = sign(payload);

    const verifiedToken = verify(token, "xyz567");

    expect(verifiedToken).toBe(null);
  });

  it("should not verify if expired payload", () => {
    jest.spyOn(Date, "now").mockImplementation(() => 1547870585000);
    const token = sign(payload, 1);

    jest.spyOn(Date, "now").mockImplementation(() => 1547870584000);
    const tokenVerifiedBeforeExpiration = verify(token);
    assertToken(tokenVerifiedBeforeExpiration);

    jest.spyOn(Date, "now").mockImplementation(() => 1547870587000);
    const tokenVerifiedAfterExpiration = verify(token);
    expect(tokenVerifiedAfterExpiration).toBe(null);
  });
});
