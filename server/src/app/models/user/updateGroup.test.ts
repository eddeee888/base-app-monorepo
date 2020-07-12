import updateGroup from "./updateGroup";
import { UserGroupMap } from "./UserGroup";

describe("addGroup()", () => {
  it("should create object given an object", () => {
    const group: UserGroupMap = {
      user: true,
    };

    const expected: UserGroupMap = {
      user: true,
    };

    const result = updateGroup(group);

    expect(result).toEqual(expected);
  });

  it("should merge and update 2 groups", () => {
    const group1: UserGroupMap = {
      admin: false,
      user: true,
    };

    const group2: UserGroupMap = {
      admin: true,
      user: false,
    };

    const expected: UserGroupMap = {
      admin: false,
      user: true,
    };

    const result = updateGroup(group1, group2);
    expect(result).toEqual(expected);
  });

  it("should not update existing group if nothing is provided", () => {
    const group1: UserGroupMap = {};

    const group2: UserGroupMap = {
      admin: true,
      user: true,
    };

    const expected: UserGroupMap = {
      admin: true,
      user: true,
    };

    const result = updateGroup(group1, group2);
    expect(result).toEqual(expected);
  });
});
