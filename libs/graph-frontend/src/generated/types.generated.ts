export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type ErrorType = 'FORBIDDEN_ERROR' | 'INPUT_VALIDATION_ERROR' | 'NOT_FOUND' | 'UNEXPECTED_ERROR';

export type PayloadError = {
  __typename: 'PayloadError';
  error: ErrorType;
};

export type Query = {
  __typename: 'Query';
  me: UserPayload;
  users: UsersPayload;
};

export type User = {
  __typename: 'User';
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UserPayload = PayloadError | UserResult;

export type UserResult = {
  __typename: 'UserResult';
  result?: Maybe<User>;
};

export type UsersPayload = PayloadError | UsersResult;

export type UsersResult = {
  __typename: 'UsersResult';
  result: Array<User>;
};
