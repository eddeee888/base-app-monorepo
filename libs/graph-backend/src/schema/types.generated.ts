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
  UserPayload: UserError | (Omit<UserResult, 'result'> & { result?: Maybe<ResolversTypes['User']> });
  UsersPayload: UsersError | (Omit<UsersResult, 'result'> & { result: Array<ResolversTypes['User']> });
};

/** Mapping of union parent types */
export type ResolversUnionParentTypes = {
  UserPayload: UserError | (Omit<UserResult, 'result'> & { result?: Maybe<ResolversParentTypes['User']> });
  UsersPayload: UsersError | (Omit<UsersResult, 'result'> & { result: Array<ResolversParentTypes['User']> });
};

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Error: ResolversTypes['UserError'] | ResolversTypes['UsersError'];
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ErrorType: ErrorType;
  Query: ResolverTypeWrapper<{}>;
  Result: ResolversTypes['UserResult'] | ResolversTypes['UsersResult'];
  User: ResolverTypeWrapper<UserMapper>;
  String: ResolverTypeWrapper<Scalars['String']>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  UserError: ResolverTypeWrapper<UserError>;
  UserPayload: ResolverTypeWrapper<ResolversUnionTypes['UserPayload']>;
  UserResult: ResolverTypeWrapper<Omit<UserResult, 'result'> & { result?: Maybe<ResolversTypes['User']> }>;
  UsersError: ResolverTypeWrapper<UsersError>;
  UsersPayload: ResolverTypeWrapper<ResolversUnionTypes['UsersPayload']>;
  UsersResult: ResolverTypeWrapper<Omit<UsersResult, 'result'> & { result: Array<ResolversTypes['User']> }>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Error: ResolversParentTypes['UserError'] | ResolversParentTypes['UsersError'];
  Boolean: Scalars['Boolean'];
  Query: {};
  Result: ResolversParentTypes['UserResult'] | ResolversParentTypes['UsersResult'];
  User: UserMapper;
  String: Scalars['String'];
  ID: Scalars['ID'];
  UserError: UserError;
  UserPayload: ResolversUnionParentTypes['UserPayload'];
  UserResult: Omit<UserResult, 'result'> & { result?: Maybe<ResolversParentTypes['User']> };
  UsersError: UsersError;
  UsersPayload: ResolversUnionParentTypes['UsersPayload'];
  UsersResult: Omit<UsersResult, 'result'> & { result: Array<ResolversParentTypes['User']> };
};

export type ErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Error'] = ResolversParentTypes['Error']
> = {
  __resolveType: TypeResolveFn<'UserError' | 'UsersError', ParentType, ContextType>;
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
};

export type QueryResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']
> = {
  me?: Resolver<ResolversTypes['UserPayload'], ParentType, ContextType>;
  users?: Resolver<ResolversTypes['UsersPayload'], ParentType, ContextType>;
};

export type ResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['Result'] = ResolversParentTypes['Result']
> = {
  __resolveType: TypeResolveFn<'UserResult' | 'UsersResult', ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
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

export type UserErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserError'] = ResolversParentTypes['UserError']
> = {
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UserPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserPayload'] = ResolversParentTypes['UserPayload']
> = {
  __resolveType: TypeResolveFn<'UserError' | 'UserResult', ParentType, ContextType>;
};

export type UserResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UserResult'] = ResolversParentTypes['UserResult']
> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  result?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersErrorResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UsersError'] = ResolversParentTypes['UsersError']
> = {
  error?: Resolver<ResolversTypes['ErrorType'], ParentType, ContextType>;
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPayloadResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UsersPayload'] = ResolversParentTypes['UsersPayload']
> = {
  __resolveType: TypeResolveFn<'UsersError' | 'UsersResult', ParentType, ContextType>;
};

export type UsersResultResolvers<
  ContextType = ResolverContext,
  ParentType extends ResolversParentTypes['UsersResult'] = ResolversParentTypes['UsersResult']
> = {
  ok?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  result?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  Error?: ErrorResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  User?: UserResolvers<ContextType>;
  UserError?: UserErrorResolvers<ContextType>;
  UserPayload?: UserPayloadResolvers<ContextType>;
  UserResult?: UserResultResolvers<ContextType>;
  UsersError?: UsersErrorResolvers<ContextType>;
  UsersPayload?: UsersPayloadResolvers<ContextType>;
  UsersResult?: UsersResultResolvers<ContextType>;
};
