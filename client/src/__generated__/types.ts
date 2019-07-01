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
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename: 'Mutation';
  signup: User;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type Query = {
  __typename: 'Query';
  user?: Maybe<User>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type SignupInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type User = {
  __typename: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
};
