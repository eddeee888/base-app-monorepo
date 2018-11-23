export enum UserGroup {
  admin = 'admin',
  user = 'user'
}

export type UserGroupMap = { [userGroup in UserGroup]?: boolean };
