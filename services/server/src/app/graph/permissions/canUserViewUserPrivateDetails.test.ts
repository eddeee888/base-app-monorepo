import { canUserViewUserPrivateDetails } from "./canUserViewUserPrivateDetails";
import { createAdmin, createUser } from "@libs/tests/fixtures";

describe("canUserViewUserPrivateDetails()", () => {
  it("should return true if is actor is admin", () => {
    const result = canUserViewUserPrivateDetails({
      viewer: createAdmin({ props: { id: 999 } }),
      userId: 888,
    });

    expect(result).toBe(true);
  });

  it("should return true if both are admin", () => {
    const result = canUserViewUserPrivateDetails({
      viewer: createAdmin({ props: { id: 999 } }),
      userId: 888,
    });

    expect(result).toBe(true);
  });

  it("should return true if actor is user", () => {
    const result = canUserViewUserPrivateDetails({
      viewer: createUser({ props: { id: 888 } }),
      userId: 888,
    });

    expect(result).toBe(true);
  });

  it("should return false if actor is NOT user", () => {
    const result = canUserViewUserPrivateDetails({
      viewer: createUser({ props: { id: 999 } }),
      userId: 888,
    });

    expect(result).toBe(false);
  });
});
