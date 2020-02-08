/* eslint-disable */
export type Maybe<T> = T | null;

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  DateTime: string;
};

/** Class */
export type Class = {
  __typename: 'Class';
  id: Scalars['ID'];
  creator: User;
  name: Scalars['String'];
  ratingScoreAverage: Scalars['Float'];
  ratingCount: Scalars['Int'];
  category: ClassCategory;
  status: ClassStatus;
  description: Scalars['String'];
  streetUnit?: Maybe<Scalars['String']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  contactNumber: Scalars['String'];
  capacity: Scalars['Int'];
  state: Scalars['String'];
  sessions: Array<ClassSession>;
  ticketPlans: Array<ClassTicketPlan>;
  images: Array<File>;
  numberOfSessions: Scalars['Int'];
  isDeleted: Scalars['Boolean'];
  viewerPermission: ClassViewerPermission;
  viewerState: ClassViewerState;
};

export type ClassBuyTicketsInput = {
  classTicketPlanId: Scalars['ID'];
  numberOfTickets: Scalars['Int'];
  tokenId: Scalars['String'];
};

/** ClassCategory */
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

export type ClassSaveInput = {
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  category: Scalars['String'];
  ticketPrice: Scalars['Int'];
  description: Scalars['String'];
  streetUnit?: Maybe<Scalars['String']>;
  streetAddress: Scalars['String'];
  city: Scalars['String'];
  postcode: Scalars['String'];
  country: Scalars['String'];
  capacity: Scalars['Int'];
  contactNumber: Scalars['String'];
  state: Scalars['String'];
  sessions: Array<ClassSessionInput>;
  images: Array<FileInput>;
  deletedSessions?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type ClassSession = {
  __typename: 'ClassSession';
  id: Scalars['ID'];
  day: ClassSessionDay;
  startTime: Scalars['String'];
  endTime: Scalars['String'];
};

export type ClassSessionDay = 'MONDAY' | 'TUESDAY' | 'WEDNESDAY' | 'THURSDAY' | 'FRIDAY' | 'SATURDAY' | 'SUNDAY';

export type ClassSessionInput = {
  id?: Maybe<Scalars['ID']>;
  day: ClassSessionDay;
  startTime: Scalars['String'];
  endTime: Scalars['String'];
};

export type ClassSessionInstance = {
  __typename: 'ClassSessionInstance';
  id: Scalars['ID'];
  realId?: Maybe<Scalars['String']>;
  date: Scalars['DateTime'];
  startTime: Scalars['String'];
  endTime: Scalars['String'];
  isFinished: Scalars['Boolean'];
  studentCount: Scalars['Int'];
  class: Class;
  viewerPermission: ClassSessionInstanceViewerPermission;
  viewerState: ClassSessionInstanceViewerState;
  students: Array<User>;
};

export type ClassSessionInstanceRating = {
  __typename: 'ClassSessionInstanceRating';
  id: Scalars['ID'];
  score: Scalars['Int'];
  review: Scalars['String'];
};

export type ClassSessionInstanceViewerPermission = {
  __typename: 'ClassSessionInstanceViewerPermission';
  canJoin: Scalars['Boolean'];
  canFinish: Scalars['Boolean'];
  canRate: Scalars['Boolean'];
};

export type ClassSessionInstanceViewerState = {
  __typename: 'ClassSessionInstanceViewerState';
  hasJoined: Scalars['Boolean'];
};

export type ClassSessionScheduleFeed = {
  __typename: 'ClassSessionScheduleFeed';
  sessionInstances: Array<ClassSessionInstance>;
  nextStartDateTime: Scalars['DateTime'];
};

export type ClassSessionScheduleInput = {
  classId: Scalars['ID'];
  startDateTime?: Maybe<Scalars['DateTime']>;
};

export type ClassStatus = 'OPEN' | 'CANCELLED';

export type ClassTicket = {
  __typename: 'ClassTicket';
  id: Scalars['ID'];
  buyer: User;
  classTicketPlan: ClassTicketPlan;
  class: Class;
  isRedeemed: Scalars['Boolean'];
};

export type ClassTicketPlan = {
  __typename: 'ClassTicketPlan';
  id: Scalars['ID'];
  ticketCount: Scalars['Int'];
  ticketPrice: Scalars['Int'];
  platformFee: Scalars['Int'];
  gst: Scalars['Int'];
  amountToCreator: Scalars['Int'];
  currency: Currency;
};

export type ClassViewerPermission = {
  __typename: 'ClassViewerPermission';
  canUpdate: Scalars['Boolean'];
  canDelete: Scalars['Boolean'];
  canCancel: Scalars['Boolean'];
  canUncancel: Scalars['Boolean'];
  canBuyTickets: Scalars['Boolean'];
};

export type ClassViewerState = {
  __typename: 'ClassViewerState';
  availableTicketCount: Scalars['Int'];
};

/** Currency */
export type Currency = 'USD' | 'AUD';

export type File = {
  __typename: 'File';
  id: Scalars['ID'];
  src: Scalars['String'];
  originalFilename: Scalars['String'];
};

export type FileInput = {
  id?: Maybe<Scalars['ID']>;
  src: Scalars['String'];
  originalFilename: Scalars['String'];
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
  userUpdate: User;
  classSave: Class;
  classDelete: Class;
  classCancel: Class;
  classUncancel: Class;
  classBuyTickets: Array<ClassTicket>;
  joinClassSessionInstance: ClassSessionInstance;
  finishClassSessionInstance: ClassSessionInstance;
  rateClassSessionInstance: ClassSessionInstanceRating;
  generateStripeLoginUrl: Scalars['String'];
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

export type MutationClassSaveArgs = {
  input: ClassSaveInput;
};

export type MutationClassDeleteArgs = {
  id: Scalars['ID'];
};

export type MutationClassCancelArgs = {
  id: Scalars['ID'];
};

export type MutationClassUncancelArgs = {
  id: Scalars['ID'];
};

export type MutationClassBuyTicketsArgs = {
  input: ClassBuyTicketsInput;
};

export type MutationJoinClassSessionInstanceArgs = {
  classSessionInstanceId: Scalars['ID'];
};

export type MutationFinishClassSessionInstanceArgs = {
  realClassSessionInstanceId: Scalars['ID'];
};

export type MutationRateClassSessionInstanceArgs = {
  input: RateClassSessionInstanceInput;
};

export type Query = {
  __typename: 'Query';
  me?: Maybe<User>;
  user?: Maybe<User>;
  userJoinedClassSessionInstances: UserJoinedClassSessionInstancesFeed;
  userTeachingPastClassSessionInstances: UserTeachingPastClassSessionInstancesFeed;
  userLearningPastClassSessionInstances: UserLearningPastClassSessionInstancesFeed;
  userClassSessionSchedule: UserClassSessionScheduleFeed;
  classCategories: Array<ClassCategory>;
  class?: Maybe<Class>;
  classesCreatedByUser: ClassesCreatedByUserFeed;
  classSessionSchedule: ClassSessionScheduleFeed;
  classSessionInstance?: Maybe<ClassSessionInstance>;
  getSignedUrlsToUploadImages: Array<S3SignedObject>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryUserJoinedClassSessionInstancesArgs = {
  input: UserJoinedClassSessionInstancesInput;
};

export type QueryUserTeachingPastClassSessionInstancesArgs = {
  input: UserTeachingPastClassSessionInstancesInput;
};

export type QueryUserLearningPastClassSessionInstancesArgs = {
  input: UserLearningPastClassSessionInstancesInput;
};

export type QueryUserClassSessionScheduleArgs = {
  input: UserClassSessionScheduleInput;
};

export type QueryClassArgs = {
  id: Scalars['ID'];
};

export type QueryClassesCreatedByUserArgs = {
  input: ClassesCreatedByUserInput;
};

export type QueryClassSessionScheduleArgs = {
  input: ClassSessionScheduleInput;
};

export type QueryClassSessionInstanceArgs = {
  realId: Scalars['ID'];
};

export type QueryGetSignedUrlsToUploadImagesArgs = {
  filenames: Array<Scalars['String']>;
};

export type RateClassSessionInstanceInput = {
  realClassSessionInstanceId: Scalars['ID'];
  score: Scalars['Int'];
  review: Scalars['String'];
};

/** AWS Sign URL to upload image */
export type S3SignedObject = {
  __typename: 'S3SignedObject';
  src: Scalars['String'];
  filename: Scalars['String'];
  originalFilename: Scalars['String'];
  uploadUrl: Scalars['String'];
};

export type SignupInput = {
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

/** User */
export type User = {
  __typename: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
  hasStripeAccount: Scalars['Boolean'];
  hasVerifiedStripeAccount: Scalars['Boolean'];
};

export type UserClassSessionScheduleFeed = {
  __typename: 'UserClassSessionScheduleFeed';
  sessionInstances: Array<ClassSessionInstance>;
  nextStartDateTime: Scalars['DateTime'];
};

export type UserClassSessionScheduleInput = {
  userId: Scalars['ID'];
  startDateTime?: Maybe<Scalars['DateTime']>;
};

export type UserJoinedClassSessionInstancesFeed = {
  __typename: 'UserJoinedClassSessionInstancesFeed';
  sessionInstances: Array<ClassSessionInstance>;
};

export type UserJoinedClassSessionInstancesInput = {
  userId: Scalars['ID'];
};

export type UserLearningPastClassSessionInstancesFeed = {
  __typename: 'UserLearningPastClassSessionInstancesFeed';
  sessionInstances: Array<ClassSessionInstance>;
};

export type UserLearningPastClassSessionInstancesInput = {
  userId: Scalars['ID'];
};

export type UserTeachingPastClassSessionInstancesFeed = {
  __typename: 'UserTeachingPastClassSessionInstancesFeed';
  sessionInstances: Array<ClassSessionInstance>;
};

export type UserTeachingPastClassSessionInstancesInput = {
  userId: Scalars['ID'];
};

export type UserUpdateInput = {
  id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
};
