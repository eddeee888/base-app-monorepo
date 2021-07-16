import { passwordRule } from "./passwordRule";

describe("passwordRule()", () => {
  const invalidMessage =
    "Password must be at least 8 characters with at least one lowercase character, one uppercase character and one number";
  const requiredMessage = "Password is required";

  it("should pass if password is at least 8 characters, with at least one lowercase, one uppercase and one number", () => {
    const result = passwordRule.validateSync("a2A45678");
    expect(result).toBe("a2A45678");
  });

  it("should pass if password is more than 8 characters, with at least one lowercase, one uppercase and one number", () => {
    const result = passwordRule.validateSync("a2A456789");
    expect(result).toBe("a2A456789");
  });

  it("should fail if less than 8 characters", () => {
    expect(() => passwordRule.validateSync("aA12345")).toThrow(invalidMessage);
  });

  it("should fail if no lowercase character", () => {
    expect(() => passwordRule.validateSync("12A45678")).toThrow(invalidMessage);
  });

  it("should fail if no uppercase character", () => {
    expect(() => passwordRule.validateSync("a2345678")).toThrow(invalidMessage);
  });

  it("should fail if no number", () => {
    expect(() => passwordRule.validateSync("abcdefGh")).toThrow(invalidMessage);
  });

  it("should fail if no value is given", () => {
    expect(() => passwordRule.validateSync(undefined)).toThrow(requiredMessage);
  });
});
