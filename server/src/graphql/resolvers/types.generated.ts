/* eslint-disable */
import { GraphQLResolveInfo } from 'graphql';
import { UserMapper } from 'graphql/models';
import { ResolverContext, ResolverContextNotLoggedIn, ResolverContextLoggedIn } from 'graphql/types';
export type Maybe<T> = T | null;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };

/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  src: Scalars['String'];
  originalFilename: Scalars['String'];
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  signup: User;
  login?: Maybe<User>;
  logout: Scalars['Boolean'];
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
  __typename?: 'Query';
  user?: Maybe<User>;
  getSignedUrlsToUploadImages: Array<S3SignedObject>;
};

export type QueryUserArgs = {
  id: Scalars['ID'];
};

export type QueryGetSignedUrlsToUploadImagesArgs = {
  filenames: Array<Scalars['String']>;
};

/** AWS Sign URL to upload image */
export type S3SignedObject = {
  __typename?: 'S3SignedObject';
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
  __typename?: 'User';
  id: Scalars['ID'];
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  displayName?: Maybe<Scalars['String']>;
  avatar?: Maybe<Scalars['String']>;
};

export type UserUpdateInput = {
  id: Scalars['ID'];
  avatar?: Maybe<Scalars['String']>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Query: ResolverTypeWrapper<{}>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  User: ResolverTypeWrapper<UserMapper>;
  String: ResolverTypeWrapper<Scalars['String']>;
  S3SignedObject: ResolverTypeWrapper<S3SignedObject>;
  Mutation: ResolverTypeWrapper<{}>;
  SignupInput: SignupInput;
  LoginInput: LoginInput;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  UserUpdateInput: UserUpdateInput;
  File: ResolverTypeWrapper<File>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Query: {};
  ID: Scalars['ID'];
  User: UserMapper;
  String: Scalars['String'];
  S3SignedObject: S3SignedObject;
  Mutation: {};
  SignupInput: SignupInput;
  LoginInput: LoginInput;
  Boolean: Scalars['Boolean'];
  UserUpdateInput: UserUpdateInput;
  File: File;
}>;

export type IsLoggedInDirectiveResolver<
  Result,
  Parent,
  ContextType = ResolverContext,
  Args = { status?: Maybe<Maybe<Scalars['Boolean']>> }
> = DirectiveResolverFn<Result, Parent, ContextType, Args>;

export type FileResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['File'] = ResolversParentTypes['File']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalFilename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type MutationResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']
> = ResolversObject<{
  signup?: Resolver<ResolversTypes['User'], ParentType, ResolverContextNotLoggedIn, RequireFields<MutationSignupArgs, 'input'>>;
  login?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ResolverContextNotLoggedIn, RequireFields<MutationLoginArgs, 'input'>>;
  logout?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  userUpdate?: Resolver<ResolversTypes['User'], ParentType, ResolverContextLoggedIn, RequireFields<MutationUserUpdateArgs, 'input'>>;
}>;

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = ResolversObject<{
  user?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType, RequireFields<QueryUserArgs, 'id'>>;
  getSignedUrlsToUploadImages?: Resolver<
    Array<ResolversTypes['S3SignedObject']>,
    ParentType,
    ContextType,
    RequireFields<QueryGetSignedUrlsToUploadImagesArgs, 'filenames'>
  >;
}>;

export type S3SignedObjectResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['S3SignedObject'] = ResolversParentTypes['S3SignedObject']
> = ResolversObject<{
  src?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  filename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  originalFilename?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  uploadUrl?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
}>;

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = ResolversObject<{
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  avatar?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = ResolverContext> = ResolversObject<{
  File?: FileResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  S3SignedObject?: S3SignedObjectResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
}>;

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = ResolverContext> = Resolvers<ContextType>;
export type DirectiveResolvers<ContextType = ResolverContext> = ResolversObject<{
  isLoggedIn?: IsLoggedInDirectiveResolver<any, any, ContextType>;
}>;

/**
 * @deprecated
 * Use "DirectiveResolvers" root object instead. If you wish to get "IDirectiveResolvers", add "typesPrefix: I" to your config.
 */
export type IDirectiveResolvers<ContextType = ResolverContext> = DirectiveResolvers<ContextType>;
