export const typeDefs = /* GraphQL */ `type AggregateClass {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Class {
  id: ID!
  creator: User!
  name: String!
  description: String!
  categories: [ClassCategory!]!
}

enum ClassCategory {
  ACCOUNTING
  PROGRAMMING
  HEALTH_FITNESS
}

type ClassConnection {
  pageInfo: PageInfo!
  edges: [ClassEdge]!
  aggregate: AggregateClass!
}

input ClassCreatecategoriesInput {
  set: [ClassCategory!]
}

input ClassCreateInput {
  creator: UserCreateOneWithoutClassesInput!
  name: String!
  description: String!
  categories: ClassCreatecategoriesInput
}

input ClassCreateManyWithoutCreatorInput {
  create: [ClassCreateWithoutCreatorInput!]
  connect: [ClassWhereUniqueInput!]
}

input ClassCreateWithoutCreatorInput {
  name: String!
  description: String!
  categories: ClassCreatecategoriesInput
}

type ClassEdge {
  node: Class!
  cursor: String!
}

enum ClassOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassPreviousValues {
  id: ID!
  name: String!
  description: String!
  categories: [ClassCategory!]!
}

input ClassScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ClassScalarWhereInput!]
  OR: [ClassScalarWhereInput!]
  NOT: [ClassScalarWhereInput!]
}

type ClassSubscriptionPayload {
  mutation: MutationType!
  node: Class
  updatedFields: [String!]
  previousValues: ClassPreviousValues
}

input ClassSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassWhereInput
  AND: [ClassSubscriptionWhereInput!]
  OR: [ClassSubscriptionWhereInput!]
  NOT: [ClassSubscriptionWhereInput!]
}

input ClassUpdatecategoriesInput {
  set: [ClassCategory!]
}

input ClassUpdateInput {
  creator: UserUpdateOneRequiredWithoutClassesInput
  name: String
  description: String
  categories: ClassUpdatecategoriesInput
}

input ClassUpdateManyDataInput {
  name: String
  description: String
  categories: ClassUpdatecategoriesInput
}

input ClassUpdateManyMutationInput {
  name: String
  description: String
  categories: ClassUpdatecategoriesInput
}

input ClassUpdateManyWithoutCreatorInput {
  create: [ClassCreateWithoutCreatorInput!]
  delete: [ClassWhereUniqueInput!]
  connect: [ClassWhereUniqueInput!]
  set: [ClassWhereUniqueInput!]
  disconnect: [ClassWhereUniqueInput!]
  update: [ClassUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [ClassUpsertWithWhereUniqueWithoutCreatorInput!]
  deleteMany: [ClassScalarWhereInput!]
  updateMany: [ClassUpdateManyWithWhereNestedInput!]
}

input ClassUpdateManyWithWhereNestedInput {
  where: ClassScalarWhereInput!
  data: ClassUpdateManyDataInput!
}

input ClassUpdateWithoutCreatorDataInput {
  name: String
  description: String
  categories: ClassUpdatecategoriesInput
}

input ClassUpdateWithWhereUniqueWithoutCreatorInput {
  where: ClassWhereUniqueInput!
  data: ClassUpdateWithoutCreatorDataInput!
}

input ClassUpsertWithWhereUniqueWithoutCreatorInput {
  where: ClassWhereUniqueInput!
  update: ClassUpdateWithoutCreatorDataInput!
  create: ClassCreateWithoutCreatorInput!
}

input ClassWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  creator: UserWhereInput
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  AND: [ClassWhereInput!]
  OR: [ClassWhereInput!]
  NOT: [ClassWhereInput!]
}

input ClassWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createClass(data: ClassCreateInput!): Class!
  updateClass(data: ClassUpdateInput!, where: ClassWhereUniqueInput!): Class
  updateManyClasses(data: ClassUpdateManyMutationInput!, where: ClassWhereInput): BatchPayload!
  upsertClass(where: ClassWhereUniqueInput!, create: ClassCreateInput!, update: ClassUpdateInput!): Class!
  deleteClass(where: ClassWhereUniqueInput!): Class
  deleteManyClasses(where: ClassWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  class(where: ClassWhereUniqueInput!): Class
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class]!
  classesConnection(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  class(where: ClassSubscriptionWhereInput): ClassSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  displayName: String
  firstName: String!
  lastName: String!
  password: String!
  userGroup: String
  classes(where: ClassWhereInput, orderBy: ClassOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Class!]
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  email: String!
  displayName: String
  firstName: String!
  lastName: String!
  password: String!
  userGroup: String
  classes: ClassCreateManyWithoutCreatorInput
}

input UserCreateOneWithoutClassesInput {
  create: UserCreateWithoutClassesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutClassesInput {
  email: String!
  displayName: String
  firstName: String!
  lastName: String!
  password: String!
  userGroup: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  displayName_ASC
  displayName_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  password_ASC
  password_DESC
  userGroup_ASC
  userGroup_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  email: String!
  displayName: String
  firstName: String!
  lastName: String!
  password: String!
  userGroup: String
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  email: String
  displayName: String
  firstName: String
  lastName: String
  password: String
  userGroup: String
  classes: ClassUpdateManyWithoutCreatorInput
}

input UserUpdateManyMutationInput {
  email: String
  displayName: String
  firstName: String
  lastName: String
  password: String
  userGroup: String
}

input UserUpdateOneRequiredWithoutClassesInput {
  create: UserCreateWithoutClassesInput
  update: UserUpdateWithoutClassesDataInput
  upsert: UserUpsertWithoutClassesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutClassesDataInput {
  email: String
  displayName: String
  firstName: String
  lastName: String
  password: String
  userGroup: String
}

input UserUpsertWithoutClassesInput {
  update: UserUpdateWithoutClassesDataInput!
  create: UserCreateWithoutClassesInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  displayName: String
  displayName_not: String
  displayName_in: [String!]
  displayName_not_in: [String!]
  displayName_lt: String
  displayName_lte: String
  displayName_gt: String
  displayName_gte: String
  displayName_contains: String
  displayName_not_contains: String
  displayName_starts_with: String
  displayName_not_starts_with: String
  displayName_ends_with: String
  displayName_not_ends_with: String
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  userGroup: String
  userGroup_not: String
  userGroup_in: [String!]
  userGroup_not_in: [String!]
  userGroup_lt: String
  userGroup_lte: String
  userGroup_gt: String
  userGroup_gte: String
  userGroup_contains: String
  userGroup_not_contains: String
  userGroup_starts_with: String
  userGroup_not_starts_with: String
  userGroup_ends_with: String
  userGroup_not_ends_with: String
  classes_every: ClassWhereInput
  classes_some: ClassWhereInput
  classes_none: ClassWhereInput
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}
`