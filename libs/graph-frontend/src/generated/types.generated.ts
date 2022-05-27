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

export type Error = {
  error: ErrorType;
  ok: Scalars['Boolean'];
};

export type ErrorType = 'FORBIDDEN_ERROR' | 'INPUT_VALIDATION_ERROR' | 'NOT_FOUND' | 'UNEXPECTED_ERROR';

export type Query = {
  __typename: 'Query';
  me: UserPayload;
  users: UsersPayload;
};

export type Result = {
  ok: Scalars['Boolean'];
};

export type User = {
  __typename: 'User';
  displayName: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
};

export type UserError = Error & {
  __typename: 'UserError';
  error: ErrorType;
  ok: Scalars['Boolean'];
};

export type UserPayload = UserError | UserResult;

export type UserResult = Result & {
  __typename: 'UserResult';
  ok: Scalars['Boolean'];
  result?: Maybe<User>;
};

export type UsersError = Error & {
  __typename: 'UsersError';
  error: ErrorType;
  ok: Scalars['Boolean'];
};

export type UsersPayload = UsersError | UsersResult;

export type UsersResult = Result & {
  __typename: 'UsersResult';
  ok: Scalars['Boolean'];
  result: Array<User>;
};
