export type UserGroup = "admin" | "user";

export type UserGroupMap = { [group in UserGroup]?: boolean };
