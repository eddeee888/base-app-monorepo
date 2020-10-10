export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Mutation = {
  __typename: "Mutation";
  userUpdate: User;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type Query = {
  __typename: "Query";
  me?: Maybe<User>;
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type User = {
  __typename: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  contactNumber?: Maybe<Scalars["String"]>;
  displayName: Scalars["String"];
  avatar?: Maybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  id: Scalars["ID"];
  avatar?: Maybe<Scalars["String"]>;
};
