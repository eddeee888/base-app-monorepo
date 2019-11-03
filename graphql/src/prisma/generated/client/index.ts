// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  file: (where?: FileWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  file: (where: FileWhereUniqueInput) => FileNullablePromise;
  files: (args?: {
    where?: FileWhereInput;
    orderBy?: FileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<File>;
  filesConnection: (args?: {
    where?: FileWhereInput;
    orderBy?: FileOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FileConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createFile: (data: FileCreateInput) => FilePromise;
  updateFile: (args: {
    data: FileUpdateInput;
    where: FileWhereUniqueInput;
  }) => FilePromise;
  updateManyFiles: (args: {
    data: FileUpdateManyMutationInput;
    where?: FileWhereInput;
  }) => BatchPayloadPromise;
  upsertFile: (args: {
    where: FileWhereUniqueInput;
    create: FileCreateInput;
    update: FileUpdateInput;
  }) => FilePromise;
  deleteFile: (where: FileWhereUniqueInput) => FilePromise;
  deleteManyFiles: (where?: FileWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  file: (
    where?: FileSubscriptionWhereInput
  ) => FileSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type FileOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "src_ASC"
  | "src_DESC"
  | "originalFilename_ASC"
  | "originalFilename_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type UserOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "email_ASC"
  | "email_DESC"
  | "displayName_ASC"
  | "displayName_DESC"
  | "firstName_ASC"
  | "firstName_DESC"
  | "lastName_ASC"
  | "lastName_DESC"
  | "password_ASC"
  | "password_DESC"
  | "userGroup_ASC"
  | "userGroup_DESC"
  | "updatedAt_ASC"
  | "updatedAt_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type FileWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface FileWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  src?: Maybe<String>;
  src_not?: Maybe<String>;
  src_in?: Maybe<String[] | String>;
  src_not_in?: Maybe<String[] | String>;
  src_lt?: Maybe<String>;
  src_lte?: Maybe<String>;
  src_gt?: Maybe<String>;
  src_gte?: Maybe<String>;
  src_contains?: Maybe<String>;
  src_not_contains?: Maybe<String>;
  src_starts_with?: Maybe<String>;
  src_not_starts_with?: Maybe<String>;
  src_ends_with?: Maybe<String>;
  src_not_ends_with?: Maybe<String>;
  originalFilename?: Maybe<String>;
  originalFilename_not?: Maybe<String>;
  originalFilename_in?: Maybe<String[] | String>;
  originalFilename_not_in?: Maybe<String[] | String>;
  originalFilename_lt?: Maybe<String>;
  originalFilename_lte?: Maybe<String>;
  originalFilename_gt?: Maybe<String>;
  originalFilename_gte?: Maybe<String>;
  originalFilename_contains?: Maybe<String>;
  originalFilename_not_contains?: Maybe<String>;
  originalFilename_starts_with?: Maybe<String>;
  originalFilename_not_starts_with?: Maybe<String>;
  originalFilename_ends_with?: Maybe<String>;
  originalFilename_not_ends_with?: Maybe<String>;
  user?: Maybe<UserWhereInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<FileWhereInput[] | FileWhereInput>;
  OR?: Maybe<FileWhereInput[] | FileWhereInput>;
  NOT?: Maybe<FileWhereInput[] | FileWhereInput>;
}

export interface UserWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  email?: Maybe<String>;
  email_not?: Maybe<String>;
  email_in?: Maybe<String[] | String>;
  email_not_in?: Maybe<String[] | String>;
  email_lt?: Maybe<String>;
  email_lte?: Maybe<String>;
  email_gt?: Maybe<String>;
  email_gte?: Maybe<String>;
  email_contains?: Maybe<String>;
  email_not_contains?: Maybe<String>;
  email_starts_with?: Maybe<String>;
  email_not_starts_with?: Maybe<String>;
  email_ends_with?: Maybe<String>;
  email_not_ends_with?: Maybe<String>;
  displayName?: Maybe<String>;
  displayName_not?: Maybe<String>;
  displayName_in?: Maybe<String[] | String>;
  displayName_not_in?: Maybe<String[] | String>;
  displayName_lt?: Maybe<String>;
  displayName_lte?: Maybe<String>;
  displayName_gt?: Maybe<String>;
  displayName_gte?: Maybe<String>;
  displayName_contains?: Maybe<String>;
  displayName_not_contains?: Maybe<String>;
  displayName_starts_with?: Maybe<String>;
  displayName_not_starts_with?: Maybe<String>;
  displayName_ends_with?: Maybe<String>;
  displayName_not_ends_with?: Maybe<String>;
  firstName?: Maybe<String>;
  firstName_not?: Maybe<String>;
  firstName_in?: Maybe<String[] | String>;
  firstName_not_in?: Maybe<String[] | String>;
  firstName_lt?: Maybe<String>;
  firstName_lte?: Maybe<String>;
  firstName_gt?: Maybe<String>;
  firstName_gte?: Maybe<String>;
  firstName_contains?: Maybe<String>;
  firstName_not_contains?: Maybe<String>;
  firstName_starts_with?: Maybe<String>;
  firstName_not_starts_with?: Maybe<String>;
  firstName_ends_with?: Maybe<String>;
  firstName_not_ends_with?: Maybe<String>;
  lastName?: Maybe<String>;
  lastName_not?: Maybe<String>;
  lastName_in?: Maybe<String[] | String>;
  lastName_not_in?: Maybe<String[] | String>;
  lastName_lt?: Maybe<String>;
  lastName_lte?: Maybe<String>;
  lastName_gt?: Maybe<String>;
  lastName_gte?: Maybe<String>;
  lastName_contains?: Maybe<String>;
  lastName_not_contains?: Maybe<String>;
  lastName_starts_with?: Maybe<String>;
  lastName_not_starts_with?: Maybe<String>;
  lastName_ends_with?: Maybe<String>;
  lastName_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  userGroup?: Maybe<String>;
  userGroup_not?: Maybe<String>;
  userGroup_in?: Maybe<String[] | String>;
  userGroup_not_in?: Maybe<String[] | String>;
  userGroup_lt?: Maybe<String>;
  userGroup_lte?: Maybe<String>;
  userGroup_gt?: Maybe<String>;
  userGroup_gte?: Maybe<String>;
  userGroup_contains?: Maybe<String>;
  userGroup_not_contains?: Maybe<String>;
  userGroup_starts_with?: Maybe<String>;
  userGroup_not_starts_with?: Maybe<String>;
  userGroup_ends_with?: Maybe<String>;
  userGroup_not_ends_with?: Maybe<String>;
  avatar?: Maybe<FileWhereInput>;
  updatedAt?: Maybe<DateTimeInput>;
  updatedAt_not?: Maybe<DateTimeInput>;
  updatedAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  updatedAt_lt?: Maybe<DateTimeInput>;
  updatedAt_lte?: Maybe<DateTimeInput>;
  updatedAt_gt?: Maybe<DateTimeInput>;
  updatedAt_gte?: Maybe<DateTimeInput>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
  email?: Maybe<String>;
}>;

export interface FileCreateInput {
  id?: Maybe<ID_Input>;
  src: String;
  originalFilename: String;
  user?: Maybe<UserCreateOneWithoutAvatarInput>;
}

export interface UserCreateOneWithoutAvatarInput {
  create?: Maybe<UserCreateWithoutAvatarInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutAvatarInput {
  id?: Maybe<ID_Input>;
  email: String;
  displayName?: Maybe<String>;
  firstName: String;
  lastName: String;
  password: String;
  userGroup: String;
}

export interface FileUpdateInput {
  src?: Maybe<String>;
  originalFilename?: Maybe<String>;
  user?: Maybe<UserUpdateOneWithoutAvatarInput>;
}

export interface UserUpdateOneWithoutAvatarInput {
  create?: Maybe<UserCreateWithoutAvatarInput>;
  update?: Maybe<UserUpdateWithoutAvatarDataInput>;
  upsert?: Maybe<UserUpsertWithoutAvatarInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutAvatarDataInput {
  email?: Maybe<String>;
  displayName?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  password?: Maybe<String>;
  userGroup?: Maybe<String>;
}

export interface UserUpsertWithoutAvatarInput {
  update: UserUpdateWithoutAvatarDataInput;
  create: UserCreateWithoutAvatarInput;
}

export interface FileUpdateManyMutationInput {
  src?: Maybe<String>;
  originalFilename?: Maybe<String>;
}

export interface UserCreateInput {
  id?: Maybe<ID_Input>;
  email: String;
  displayName?: Maybe<String>;
  firstName: String;
  lastName: String;
  password: String;
  userGroup: String;
  avatar?: Maybe<FileCreateOneWithoutUserInput>;
}

export interface FileCreateOneWithoutUserInput {
  create?: Maybe<FileCreateWithoutUserInput>;
  connect?: Maybe<FileWhereUniqueInput>;
}

export interface FileCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  src: String;
  originalFilename: String;
}

export interface UserUpdateInput {
  email?: Maybe<String>;
  displayName?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  password?: Maybe<String>;
  userGroup?: Maybe<String>;
  avatar?: Maybe<FileUpdateOneWithoutUserInput>;
}

export interface FileUpdateOneWithoutUserInput {
  create?: Maybe<FileCreateWithoutUserInput>;
  update?: Maybe<FileUpdateWithoutUserDataInput>;
  upsert?: Maybe<FileUpsertWithoutUserInput>;
  delete?: Maybe<Boolean>;
  disconnect?: Maybe<Boolean>;
  connect?: Maybe<FileWhereUniqueInput>;
}

export interface FileUpdateWithoutUserDataInput {
  src?: Maybe<String>;
  originalFilename?: Maybe<String>;
}

export interface FileUpsertWithoutUserInput {
  update: FileUpdateWithoutUserDataInput;
  create: FileCreateWithoutUserInput;
}

export interface UserUpdateManyMutationInput {
  email?: Maybe<String>;
  displayName?: Maybe<String>;
  firstName?: Maybe<String>;
  lastName?: Maybe<String>;
  password?: Maybe<String>;
  userGroup?: Maybe<String>;
}

export interface FileSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<FileWhereInput>;
  AND?: Maybe<FileSubscriptionWhereInput[] | FileSubscriptionWhereInput>;
  OR?: Maybe<FileSubscriptionWhereInput[] | FileSubscriptionWhereInput>;
  NOT?: Maybe<FileSubscriptionWhereInput[] | FileSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface File {
  id: ID_Output;
  src: String;
  originalFilename: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface FilePromise extends Promise<File>, Fragmentable {
  id: () => Promise<ID_Output>;
  src: () => Promise<String>;
  originalFilename: () => Promise<String>;
  user: <T = UserPromise>() => T;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface FileSubscription
  extends Promise<AsyncIterator<File>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  src: () => Promise<AsyncIterator<String>>;
  originalFilename: () => Promise<AsyncIterator<String>>;
  user: <T = UserSubscription>() => T;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface FileNullablePromise
  extends Promise<File | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  src: () => Promise<String>;
  originalFilename: () => Promise<String>;
  user: <T = UserPromise>() => T;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface User {
  id: ID_Output;
  email: String;
  displayName?: String;
  firstName: String;
  lastName: String;
  password: String;
  userGroup: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  displayName: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  password: () => Promise<String>;
  userGroup: () => Promise<String>;
  avatar: <T = FilePromise>() => T;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  displayName: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  userGroup: () => Promise<AsyncIterator<String>>;
  avatar: <T = FileSubscription>() => T;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  displayName: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  password: () => Promise<String>;
  userGroup: () => Promise<String>;
  avatar: <T = FilePromise>() => T;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface FileConnection {
  pageInfo: PageInfo;
  edges: FileEdge[];
}

export interface FileConnectionPromise
  extends Promise<FileConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<FileEdge>>() => T;
  aggregate: <T = AggregateFilePromise>() => T;
}

export interface FileConnectionSubscription
  extends Promise<AsyncIterator<FileConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<FileEdgeSubscription>>>() => T;
  aggregate: <T = AggregateFileSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface FileEdge {
  node: File;
  cursor: String;
}

export interface FileEdgePromise extends Promise<FileEdge>, Fragmentable {
  node: <T = FilePromise>() => T;
  cursor: () => Promise<String>;
}

export interface FileEdgeSubscription
  extends Promise<AsyncIterator<FileEdge>>,
    Fragmentable {
  node: <T = FileSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateFile {
  count: Int;
}

export interface AggregateFilePromise
  extends Promise<AggregateFile>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateFileSubscription
  extends Promise<AsyncIterator<AggregateFile>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface FileSubscriptionPayload {
  mutation: MutationType;
  node: File;
  updatedFields: String[];
  previousValues: FilePreviousValues;
}

export interface FileSubscriptionPayloadPromise
  extends Promise<FileSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = FilePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = FilePreviousValuesPromise>() => T;
}

export interface FileSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<FileSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = FileSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = FilePreviousValuesSubscription>() => T;
}

export interface FilePreviousValues {
  id: ID_Output;
  src: String;
  originalFilename: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface FilePreviousValuesPromise
  extends Promise<FilePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  src: () => Promise<String>;
  originalFilename: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface FilePreviousValuesSubscription
  extends Promise<AsyncIterator<FilePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  src: () => Promise<AsyncIterator<String>>;
  originalFilename: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  id: ID_Output;
  email: String;
  displayName?: String;
  firstName: String;
  lastName: String;
  password: String;
  userGroup: String;
  updatedAt: DateTimeOutput;
  createdAt: DateTimeOutput;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  email: () => Promise<String>;
  displayName: () => Promise<String>;
  firstName: () => Promise<String>;
  lastName: () => Promise<String>;
  password: () => Promise<String>;
  userGroup: () => Promise<String>;
  updatedAt: () => Promise<DateTimeOutput>;
  createdAt: () => Promise<DateTimeOutput>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  email: () => Promise<AsyncIterator<String>>;
  displayName: () => Promise<AsyncIterator<String>>;
  firstName: () => Promise<AsyncIterator<String>>;
  lastName: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  userGroup: () => Promise<AsyncIterator<String>>;
  updatedAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "File",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `${process.env["PRISMA_ENDPOINT"]}`,
  secret: `${process.env["PRISMA_SECRET"]}`
});
export const prisma = new Prisma();
