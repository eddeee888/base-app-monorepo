/* eslint-disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type LoginInput = {
  email: Scalars["String"];
  password: Scalars["String"];
};

export type Mutation = {
  __typename: "Mutation";
  signup: User;
  login?: Maybe<User>;
  logout: Scalars["Boolean"];
  userUpdate: User;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationUserUpdateArgs = {
  input: UserUpdateInput;
};

export type Query = {
  __typename: "Query";
  me?: Maybe<User>;
  user?: Maybe<User>;
  getSignedUrlsToUploadImages: Array<S3SignedObject>;
};

export type QueryUserArgs = {
  id: Scalars["ID"];
};

export type QueryGetSignedUrlsToUploadImagesArgs = {
  filenames: Array<Scalars["String"]>;
};

/** AWS Sign URL to upload image */
export type S3SignedObject = {
  __typename: "S3SignedObject";
  src: Scalars["String"];
  filename: Scalars["String"];
  originalFilename: Scalars["String"];
  uploadUrl: Scalars["String"];
};

export type SignupInput = {
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  password: Scalars["String"];
};

/** User */
export type User = {
  __typename: "User";
  id: Scalars["ID"];
  email: Scalars["String"];
  firstName: Scalars["String"];
  lastName: Scalars["String"];
  displayName?: Maybe<Scalars["String"]>;
  avatar?: Maybe<Scalars["String"]>;
};

export type UserUpdateInput = {
  id: Scalars["ID"];
  avatar?: Maybe<Scalars["String"]>;
};
