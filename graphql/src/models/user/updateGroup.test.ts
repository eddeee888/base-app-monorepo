import updateGroup from './updateGroup';
import { UserGroup, UserGroupMap } from './UserGroup';

describe('addGroup()', () => {
  it('should create object given an object', () => {
    const group: UserGroupMap = {
      [UserGroup.user]: true
    };

    const expected: UserGroupMap = {
      [UserGroup.user]: true
    };

    const result = updateGroup(group);

    expect(result).toEqual(expected);
  });

  it('should merge and update 2 groups', () => {
    const group1: UserGroupMap = {
      [UserGroup.admin]: false,
      [UserGroup.user]: true
    };

    const group2: UserGroupMap = {
      [UserGroup.admin]: true,
      [UserGroup.user]: false
    };

    const expected: UserGroupMap = {
      [UserGroup.admin]: false,
      [UserGroup.user]: true
    };

    const result = updateGroup(group1, group2);
    expect(result).toEqual(expected);
  });

  it('should not update existing group if nothing is provided', () => {
    const group1: UserGroupMap = {};

    const group2: UserGroupMap = {
      [UserGroup.admin]: true,
      [UserGroup.user]: true
    };

    const expected: UserGroupMap = {
      [UserGroup.admin]: true,
      [UserGroup.user]: true
    };

    const result = updateGroup(group1, group2);
    expect(result).toEqual(expected);
  });
});
