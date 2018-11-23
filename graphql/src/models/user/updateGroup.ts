import { UserGroupMap } from './UserGroup';

type UpdateGroupFn = (
  newGroup: UserGroupMap,
  existingGroups?: UserGroupMap
) => UserGroupMap;

const updateGroup: UpdateGroupFn = (newGroup, existingGroups = {}) => {
  existingGroups = { ...existingGroups, ...newGroup };
  return existingGroups;
};

export default updateGroup;
