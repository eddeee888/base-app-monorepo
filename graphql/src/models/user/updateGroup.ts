import { UserGroupMap } from './UserGroup';

type UpdateGroupFn = (newGroup: UserGroupMap, existingGroups?: UserGroupMap) => UserGroupMap;

const updateGroup: UpdateGroupFn = (newGroup, existingGroups = {}) => {
  return { ...existingGroups, ...newGroup };
};

export default updateGroup;
