import { GraphQLResolveInfo } from 'graphql';
import { UserMapper } from './user/schema.mappers';
import { ResolverContext } from '../types';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
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

export type ResolverTypeWrapper<T> = Promise<T> | T;

export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

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
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (
  obj: T,
  context: TContext,
  info: GraphQLResolveInfo
) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes = {
  UserPayload: PayloadError | (Omit<UserResult, 'result'> & { result?: Maybe<ResolversTypes['User']> });
  UsersPayload: PayloadError | (Omit<UsersResult, 'result'> & { result: Array<ResolversTypes['User']> });
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  UserPayload: PayloadError | (Omit<UserResult, 'result'> & { result?: Maybe<ResolversParentTypes['User']> });
  UsersPayload: PayloadError | (Omit<UsersResult, 'result'> & { result: Array<ResolversParentTypes['User']> });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  ErrorType: ErrorType;
  PayloadError: ResolverTypeWrapper<PayloadError>;
  Query: ResolverTypeWrapper<{}>;
  User: ResolverTypeWrapper<UserMapper>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  UserPayload: ResolverTypeWrapper<ResolversUnionTypes['UserPayload']>;
  UserResult: ResolverTypeWrapper<Omit<UserResult, 'result'> & { result?: Maybe<ResolversTypes['User']> }>;
  UsersPayload: ResolverTypeWrapper<ResolversUnionTypes['UsersPayload']>;
  UsersResult: ResolverTypeWrapper<Omit<UsersResult, 'result'> & { result: Array<ResolversTypes['User']> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  PayloadError: PayloadError;
  Query: {};
  User: UserMapper;
  String: Scalars['String'];
  ID: Scalars['ID'];
  UserPayload: ResolversUnionParentTypes['UserPayload'];
  UserResult: Omit<UserResult, 'result'> & { result?: Maybe<ResolversParentTypes['User']> };
  UsersPayload: ResolversUnionParentTypes['UsersPayload'];
  UsersResult: Omit<UsersResult, 'result'> & { result: Array<ResolversParentTypes['User']> };
  Boolean: Scalars['Boolean'];
};

export type PayloadErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['PayloadError'] = ResolversParentTypes['PayloadError']
> = {
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  me?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType>;
  users?: Resolver<ResolversTypes['UsersPayload'], ParentType, ContextType>;
};

export type UserResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']
> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']
> = {
  __resolveType: TypeResolveFn<'PayloadError' | 'UserResult', ParentType, ContextType>;
};

export type UserResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']
> = {
  result?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UsersPayload'] = ResolversParentTypes['UsersPayload']
> = {
  __resolveType: TypeResolveFn<'PayloadError' | 'UsersResult', ParentType, ContextType>;
};

export type UsersResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UsersResult'] = ResolversParentTypes['UsersResult']
> = {
  result?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  PayloadError?: PayloadErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UsersPayload?: UsersPayloadResolvers<ContextType>;
  UsersResult?: UsersResultResolvers<ContextType>;
};
