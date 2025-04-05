import { GraphQLResolveInfo } from 'graphql';
import { UserMapper } from './user/schema.mappers';
import { ResolverContext } from '../types';
export type Maybe<T> = T | null | undefined;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type EnumResolverSignature<T, AllowedValues = any> = { [key in keyof T]?: AllowedValues };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string | number; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type MeResult = MeResultOk | ResultError;

export type MeResultOk = {
  __typename?: 'MeResultOk';
  result?: Maybe<User>;
};

export type Query = {
  __typename?: 'Query';
  me: MeResult;
  users: UsersResult;
};

export type ResultError = {
  __typename?: 'ResultError';
  error: ResultErrorType;
};

export type ResultErrorType =
  | 'FORBIDDEN_ERROR'
  | 'INPUT_VALIDATION_ERROR'
  | 'NOT_FOUND'
  | 'UNEXPECTED_ERROR';

export type User = {
  __typename?: 'User';
  displayName: Scalars['String']['output'];
  email: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
};

export type UsersResult = ResultError | UsersResultOk;

export type UsersResultOk = {
  __typename?: 'UsersResultOk';
  result: Array<User>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

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

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  MeResult: ( Omit<MeResultOk, 'result'> & { result?: Maybe<_RefType['User']> } & { __typename: 'MeResultOk' } ) | ( Omit<ResultError, 'error'> & { error: _RefType['ResultErrorType'] } & { __typename: 'ResultError' } );
  UsersResult: ( Omit<ResultError, 'error'> & { error: _RefType['ResultErrorType'] } & { __typename: 'ResultError' } ) | ( Omit<UsersResultOk, 'result'> & { result: Array<_RefType['User']> } & { __typename: 'UsersResultOk' } );
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  MeResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['MeResult']>;
  MeResultOk: ResolverTypeWrapper<Omit<MeResultOk, 'result'> & { result?: Maybe<ResolversTypes['User']> }>;
  Query: ResolverTypeWrapper<{}>;
  ResultError: ResolverTypeWrapper<Omit<ResultError, 'error'> & { error: ResolversTypes['ResultErrorType'] }>;
  ResultErrorType: ResolverTypeWrapper<'NOT_FOUND' | 'INPUT_VALIDATION_ERROR' | 'FORBIDDEN_ERROR' | 'UNEXPECTED_ERROR'>;
  User: ResolverTypeWrapper<UserMapper>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  UsersResult: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>['UsersResult']>;
  UsersResultOk: ResolverTypeWrapper<Omit<UsersResultOk, 'result'> & { result: Array<ResolversTypes['User']> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  MeResult: ResolversUnionTypes<ResolversParentTypes>['MeResult'];
  MeResultOk: Omit<MeResultOk, 'result'> & { result?: Maybe<ResolversParentTypes['User']> };
  Query: {};
  ResultError: ResultError;
  User: UserMapper;
  String: Scalars['String']['output'];
  ID: Scalars['ID']['output'];
  UsersResult: ResolversUnionTypes<ResolversParentTypes>['UsersResult'];
  UsersResultOk: Omit<UsersResultOk, 'result'> & { result: Array<ResolversParentTypes['User']> };
  Boolean: Scalars['Boolean']['output'];
};

export type MeResultResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['MeResult'] = ResolversParentTypes['MeResult']> = {
  __resolveType?: TypeResolveFn<'MeResultOk' | 'ResultError', ParentType, ContextType>;
};

export type MeResultOkResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['MeResultOk'] = ResolversParentTypes['MeResultOk']> = {
  result?: Resolver<Maybe<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  me?: Resolver<ResolversTypes['MeResult'], ParentType, ContextType>;
  users?: Resolver<ResolversTypes['UsersResult'], ParentType, ContextType>;
};

export type ResultErrorResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['ResultError'] = ResolversParentTypes['ResultError']> = {
  error?: Resolver<ResolversTypes['ResultErrorType'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ResultErrorTypeResolvers = EnumResolverSignature<{ FORBIDDEN_ERROR?: any, INPUT_VALIDATION_ERROR?: any, NOT_FOUND?: any, UNEXPECTED_ERROR?: any }, ResolversTypes['ResultErrorType']>;

export type UserResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['User'] = ResolversParentTypes['User']> = {
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  email?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersResultResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['UsersResult'] = ResolversParentTypes['UsersResult']> = {
  __resolveType?: TypeResolveFn<'ResultError' | 'UsersResultOk', ParentType, ContextType>;
};

export type UsersResultOkResolvers<ContextType = ResolverContext, ParentType extends ResolversParentTypes['UsersResultOk'] = ResolversParentTypes['UsersResultOk']> = {
  result?: Resolver<Array<ResolversTypes['User']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = ResolverContext> = {
  MeResult?: MeResultResolvers<ContextType>;
  MeResultOk?: MeResultOkResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ResultError?: ResultErrorResolvers<ContextType>;
  ResultErrorType?: ResultErrorTypeResolvers;
  User?: UserResolvers<ContextType>;
  UsersResult?: UsersResultResolvers<ContextType>;
  UsersResultOk?: UsersResultOkResolvers<ContextType>;
};

