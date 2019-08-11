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

export type Class = {
  __typename: 'Class';
  id: Scalars['ID'];
  creator: User;
  name: Scalars['String'];
  price: Scalars['Int'];
  category: ClassCategory;
  description: Scalars['String'];
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  contactNumber: Scalars['String'];
  state: Scalars['String'];
  streetUnit: Scalars['String'];
  sessions: Array<ClassSession>;
  numberOfSessions: Scalars['Int'];
  permissions: ClassPermission;
  isDeleted: Scalars['Boolean'];
};

export type ClassCategory = {
  __typename: 'ClassCategory';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ClassesCreatedByUserFeed = {
  __typename: 'ClassesCreatedByUserFeed';
  classes: Array<Class>;
};

export type ClassesCreatedByUserInput = {
  userId: Scalars['ID'];
};

export type ClassPermission = {
  __typename: 'ClassPermission';
  canEdit: Scalars['Boolean'];
  canDelete: Scalars['Boolean'];
};

export type ClassSaveInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  price: Scalars['Int'];
  category: Scalars['String'];
  description: Scalars['String'];
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  contactNumber: Scalars['String'];
  state: Scalars['String'];
  streetUnit: Scalars['String'];
  sessions: Array<ClassSessionInput>;
  deletedSessions?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ClassSession = {
  __typename: 'ClassSession';
  id: Scalars['ID'];
  day: ClassSessionDay;
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  capacity: Scalars['Int'];
};

export type ClassSessionDay =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export type ClassSessionInput = {
  id?: Maybe<Scalars['ID']>;
  day: ClassSessionDay;
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  capacity: Scalars['Int'];
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
  classSave: Class;
  classDelete: Class;
};

export type MutationSignupArgs = {
  input: SignupInput;
};

export type MutationLoginArgs = {
  input: LoginInput;
};

export type MutationClassSaveArgs = {
  input: ClassSaveInput;
};

export type MutationClassDeleteArgs = {
  id: Scalars['ID'];
};

export type Query = {
  __typename: 'Query';
  user?: Maybe<User>;
  classCategories: Array<ClassCategory>;
  class?: Maybe<Class>;
  classesCreatedByUser: ClassesCreatedByUserFeed;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryClassArgs = {
  id: Scalars['ID'];
};

export type QueryClassesCreatedByUserArgs = {
  input: ClassesCreatedByUserInput;
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
