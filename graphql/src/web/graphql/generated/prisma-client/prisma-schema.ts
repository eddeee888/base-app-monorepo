export const typeDefs = /* GraphQL */ `type AggregateClass {
  count: Int!
}

type AggregateClassCategory {
  count: Int!
}

type AggregateClassSession {
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
  categories(where: ClassCategoryWhereInput, orderBy: ClassCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassCategory!]
  streetUnit: String!
  streetAddress: String!
  city: String!
  postcode: String!
  state: String!
  country: String!
  contactNumber: String!
  sessions(where: ClassSessionWhereInput, orderBy: ClassSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassSession!]
}

type ClassCategory {
  id: ID!
  name: String!
}

type ClassCategoryConnection {
  pageInfo: PageInfo!
  edges: [ClassCategoryEdge]!
  aggregate: AggregateClassCategory!
}

input ClassCategoryCreateInput {
  name: String!
}

input ClassCategoryCreateManyInput {
  create: [ClassCategoryCreateInput!]
  connect: [ClassCategoryWhereUniqueInput!]
}

type ClassCategoryEdge {
  node: ClassCategory!
  cursor: String!
}

enum ClassCategoryOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassCategoryPreviousValues {
  id: ID!
  name: String!
}

input ClassCategoryScalarWhereInput {
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
  AND: [ClassCategoryScalarWhereInput!]
  OR: [ClassCategoryScalarWhereInput!]
  NOT: [ClassCategoryScalarWhereInput!]
}

type ClassCategorySubscriptionPayload {
  mutation: MutationType!
  node: ClassCategory
  updatedFields: [String!]
  previousValues: ClassCategoryPreviousValues
}

input ClassCategorySubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassCategoryWhereInput
  AND: [ClassCategorySubscriptionWhereInput!]
  OR: [ClassCategorySubscriptionWhereInput!]
  NOT: [ClassCategorySubscriptionWhereInput!]
}

input ClassCategoryUpdateDataInput {
  name: String
}

input ClassCategoryUpdateInput {
  name: String
}

input ClassCategoryUpdateManyDataInput {
  name: String
}

input ClassCategoryUpdateManyInput {
  create: [ClassCategoryCreateInput!]
  update: [ClassCategoryUpdateWithWhereUniqueNestedInput!]
  upsert: [ClassCategoryUpsertWithWhereUniqueNestedInput!]
  delete: [ClassCategoryWhereUniqueInput!]
  connect: [ClassCategoryWhereUniqueInput!]
  set: [ClassCategoryWhereUniqueInput!]
  disconnect: [ClassCategoryWhereUniqueInput!]
  deleteMany: [ClassCategoryScalarWhereInput!]
  updateMany: [ClassCategoryUpdateManyWithWhereNestedInput!]
}

input ClassCategoryUpdateManyMutationInput {
  name: String
}

input ClassCategoryUpdateManyWithWhereNestedInput {
  where: ClassCategoryScalarWhereInput!
  data: ClassCategoryUpdateManyDataInput!
}

input ClassCategoryUpdateWithWhereUniqueNestedInput {
  where: ClassCategoryWhereUniqueInput!
  data: ClassCategoryUpdateDataInput!
}

input ClassCategoryUpsertWithWhereUniqueNestedInput {
  where: ClassCategoryWhereUniqueInput!
  update: ClassCategoryUpdateDataInput!
  create: ClassCategoryCreateInput!
}

input ClassCategoryWhereInput {
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
  AND: [ClassCategoryWhereInput!]
  OR: [ClassCategoryWhereInput!]
  NOT: [ClassCategoryWhereInput!]
}

input ClassCategoryWhereUniqueInput {
  id: ID
}

type ClassConnection {
  pageInfo: PageInfo!
  edges: [ClassEdge]!
  aggregate: AggregateClass!
}

input ClassCreateInput {
  creator: UserCreateOneWithoutClassesInput!
  name: String!
  description: String!
  categories: ClassCategoryCreateManyInput
  streetUnit: String!
  streetAddress: String!
  city: String!
  postcode: String!
  state: String!
  country: String!
  contactNumber: String!
  sessions: ClassSessionCreateManyInput
}

input ClassCreateManyWithoutCreatorInput {
  create: [ClassCreateWithoutCreatorInput!]
  connect: [ClassWhereUniqueInput!]
}

input ClassCreateWithoutCreatorInput {
  name: String!
  description: String!
  categories: ClassCategoryCreateManyInput
  streetUnit: String!
  streetAddress: String!
  city: String!
  postcode: String!
  state: String!
  country: String!
  contactNumber: String!
  sessions: ClassSessionCreateManyInput
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
  streetUnit_ASC
  streetUnit_DESC
  streetAddress_ASC
  streetAddress_DESC
  city_ASC
  city_DESC
  postcode_ASC
  postcode_DESC
  state_ASC
  state_DESC
  country_ASC
  country_DESC
  contactNumber_ASC
  contactNumber_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassPreviousValues {
  id: ID!
  name: String!
  description: String!
  streetUnit: String!
  streetAddress: String!
  city: String!
  postcode: String!
  state: String!
  country: String!
  contactNumber: String!
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
  streetUnit: String
  streetUnit_not: String
  streetUnit_in: [String!]
  streetUnit_not_in: [String!]
  streetUnit_lt: String
  streetUnit_lte: String
  streetUnit_gt: String
  streetUnit_gte: String
  streetUnit_contains: String
  streetUnit_not_contains: String
  streetUnit_starts_with: String
  streetUnit_not_starts_with: String
  streetUnit_ends_with: String
  streetUnit_not_ends_with: String
  streetAddress: String
  streetAddress_not: String
  streetAddress_in: [String!]
  streetAddress_not_in: [String!]
  streetAddress_lt: String
  streetAddress_lte: String
  streetAddress_gt: String
  streetAddress_gte: String
  streetAddress_contains: String
  streetAddress_not_contains: String
  streetAddress_starts_with: String
  streetAddress_not_starts_with: String
  streetAddress_ends_with: String
  streetAddress_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postcode: String
  postcode_not: String
  postcode_in: [String!]
  postcode_not_in: [String!]
  postcode_lt: String
  postcode_lte: String
  postcode_gt: String
  postcode_gte: String
  postcode_contains: String
  postcode_not_contains: String
  postcode_starts_with: String
  postcode_not_starts_with: String
  postcode_ends_with: String
  postcode_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  contactNumber: String
  contactNumber_not: String
  contactNumber_in: [String!]
  contactNumber_not_in: [String!]
  contactNumber_lt: String
  contactNumber_lte: String
  contactNumber_gt: String
  contactNumber_gte: String
  contactNumber_contains: String
  contactNumber_not_contains: String
  contactNumber_starts_with: String
  contactNumber_not_starts_with: String
  contactNumber_ends_with: String
  contactNumber_not_ends_with: String
  AND: [ClassScalarWhereInput!]
  OR: [ClassScalarWhereInput!]
  NOT: [ClassScalarWhereInput!]
}

type ClassSession {
  id: ID!
  day: ClassSessionDay!
  startTime: String!
  endTime: String!
  capacity: Int!
}

type ClassSessionConnection {
  pageInfo: PageInfo!
  edges: [ClassSessionEdge]!
  aggregate: AggregateClassSession!
}

input ClassSessionCreateInput {
  day: ClassSessionDay!
  startTime: String!
  endTime: String!
  capacity: Int!
}

input ClassSessionCreateManyInput {
  create: [ClassSessionCreateInput!]
  connect: [ClassSessionWhereUniqueInput!]
}

enum ClassSessionDay {
  MONDAY
  TUESDAY
  WEDNESDAY
  THURSDAY
  FRIDAY
  SATURDAY
  SUNDAY
}

type ClassSessionEdge {
  node: ClassSession!
  cursor: String!
}

enum ClassSessionOrderByInput {
  id_ASC
  id_DESC
  day_ASC
  day_DESC
  startTime_ASC
  startTime_DESC
  endTime_ASC
  endTime_DESC
  capacity_ASC
  capacity_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type ClassSessionPreviousValues {
  id: ID!
  day: ClassSessionDay!
  startTime: String!
  endTime: String!
  capacity: Int!
}

input ClassSessionScalarWhereInput {
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
  day: ClassSessionDay
  day_not: ClassSessionDay
  day_in: [ClassSessionDay!]
  day_not_in: [ClassSessionDay!]
  startTime: String
  startTime_not: String
  startTime_in: [String!]
  startTime_not_in: [String!]
  startTime_lt: String
  startTime_lte: String
  startTime_gt: String
  startTime_gte: String
  startTime_contains: String
  startTime_not_contains: String
  startTime_starts_with: String
  startTime_not_starts_with: String
  startTime_ends_with: String
  startTime_not_ends_with: String
  endTime: String
  endTime_not: String
  endTime_in: [String!]
  endTime_not_in: [String!]
  endTime_lt: String
  endTime_lte: String
  endTime_gt: String
  endTime_gte: String
  endTime_contains: String
  endTime_not_contains: String
  endTime_starts_with: String
  endTime_not_starts_with: String
  endTime_ends_with: String
  endTime_not_ends_with: String
  capacity: Int
  capacity_not: Int
  capacity_in: [Int!]
  capacity_not_in: [Int!]
  capacity_lt: Int
  capacity_lte: Int
  capacity_gt: Int
  capacity_gte: Int
  AND: [ClassSessionScalarWhereInput!]
  OR: [ClassSessionScalarWhereInput!]
  NOT: [ClassSessionScalarWhereInput!]
}

type ClassSessionSubscriptionPayload {
  mutation: MutationType!
  node: ClassSession
  updatedFields: [String!]
  previousValues: ClassSessionPreviousValues
}

input ClassSessionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: ClassSessionWhereInput
  AND: [ClassSessionSubscriptionWhereInput!]
  OR: [ClassSessionSubscriptionWhereInput!]
  NOT: [ClassSessionSubscriptionWhereInput!]
}

input ClassSessionUpdateDataInput {
  day: ClassSessionDay
  startTime: String
  endTime: String
  capacity: Int
}

input ClassSessionUpdateInput {
  day: ClassSessionDay
  startTime: String
  endTime: String
  capacity: Int
}

input ClassSessionUpdateManyDataInput {
  day: ClassSessionDay
  startTime: String
  endTime: String
  capacity: Int
}

input ClassSessionUpdateManyInput {
  create: [ClassSessionCreateInput!]
  update: [ClassSessionUpdateWithWhereUniqueNestedInput!]
  upsert: [ClassSessionUpsertWithWhereUniqueNestedInput!]
  delete: [ClassSessionWhereUniqueInput!]
  connect: [ClassSessionWhereUniqueInput!]
  set: [ClassSessionWhereUniqueInput!]
  disconnect: [ClassSessionWhereUniqueInput!]
  deleteMany: [ClassSessionScalarWhereInput!]
  updateMany: [ClassSessionUpdateManyWithWhereNestedInput!]
}

input ClassSessionUpdateManyMutationInput {
  day: ClassSessionDay
  startTime: String
  endTime: String
  capacity: Int
}

input ClassSessionUpdateManyWithWhereNestedInput {
  where: ClassSessionScalarWhereInput!
  data: ClassSessionUpdateManyDataInput!
}

input ClassSessionUpdateWithWhereUniqueNestedInput {
  where: ClassSessionWhereUniqueInput!
  data: ClassSessionUpdateDataInput!
}

input ClassSessionUpsertWithWhereUniqueNestedInput {
  where: ClassSessionWhereUniqueInput!
  update: ClassSessionUpdateDataInput!
  create: ClassSessionCreateInput!
}

input ClassSessionWhereInput {
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
  day: ClassSessionDay
  day_not: ClassSessionDay
  day_in: [ClassSessionDay!]
  day_not_in: [ClassSessionDay!]
  startTime: String
  startTime_not: String
  startTime_in: [String!]
  startTime_not_in: [String!]
  startTime_lt: String
  startTime_lte: String
  startTime_gt: String
  startTime_gte: String
  startTime_contains: String
  startTime_not_contains: String
  startTime_starts_with: String
  startTime_not_starts_with: String
  startTime_ends_with: String
  startTime_not_ends_with: String
  endTime: String
  endTime_not: String
  endTime_in: [String!]
  endTime_not_in: [String!]
  endTime_lt: String
  endTime_lte: String
  endTime_gt: String
  endTime_gte: String
  endTime_contains: String
  endTime_not_contains: String
  endTime_starts_with: String
  endTime_not_starts_with: String
  endTime_ends_with: String
  endTime_not_ends_with: String
  capacity: Int
  capacity_not: Int
  capacity_in: [Int!]
  capacity_not_in: [Int!]
  capacity_lt: Int
  capacity_lte: Int
  capacity_gt: Int
  capacity_gte: Int
  AND: [ClassSessionWhereInput!]
  OR: [ClassSessionWhereInput!]
  NOT: [ClassSessionWhereInput!]
}

input ClassSessionWhereUniqueInput {
  id: ID
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

input ClassUpdateInput {
  creator: UserUpdateOneRequiredWithoutClassesInput
  name: String
  description: String
  categories: ClassCategoryUpdateManyInput
  streetUnit: String
  streetAddress: String
  city: String
  postcode: String
  state: String
  country: String
  contactNumber: String
  sessions: ClassSessionUpdateManyInput
}

input ClassUpdateManyDataInput {
  name: String
  description: String
  streetUnit: String
  streetAddress: String
  city: String
  postcode: String
  state: String
  country: String
  contactNumber: String
}

input ClassUpdateManyMutationInput {
  name: String
  description: String
  streetUnit: String
  streetAddress: String
  city: String
  postcode: String
  state: String
  country: String
  contactNumber: String
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
  categories: ClassCategoryUpdateManyInput
  streetUnit: String
  streetAddress: String
  city: String
  postcode: String
  state: String
  country: String
  contactNumber: String
  sessions: ClassSessionUpdateManyInput
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
  categories_every: ClassCategoryWhereInput
  categories_some: ClassCategoryWhereInput
  categories_none: ClassCategoryWhereInput
  streetUnit: String
  streetUnit_not: String
  streetUnit_in: [String!]
  streetUnit_not_in: [String!]
  streetUnit_lt: String
  streetUnit_lte: String
  streetUnit_gt: String
  streetUnit_gte: String
  streetUnit_contains: String
  streetUnit_not_contains: String
  streetUnit_starts_with: String
  streetUnit_not_starts_with: String
  streetUnit_ends_with: String
  streetUnit_not_ends_with: String
  streetAddress: String
  streetAddress_not: String
  streetAddress_in: [String!]
  streetAddress_not_in: [String!]
  streetAddress_lt: String
  streetAddress_lte: String
  streetAddress_gt: String
  streetAddress_gte: String
  streetAddress_contains: String
  streetAddress_not_contains: String
  streetAddress_starts_with: String
  streetAddress_not_starts_with: String
  streetAddress_ends_with: String
  streetAddress_not_ends_with: String
  city: String
  city_not: String
  city_in: [String!]
  city_not_in: [String!]
  city_lt: String
  city_lte: String
  city_gt: String
  city_gte: String
  city_contains: String
  city_not_contains: String
  city_starts_with: String
  city_not_starts_with: String
  city_ends_with: String
  city_not_ends_with: String
  postcode: String
  postcode_not: String
  postcode_in: [String!]
  postcode_not_in: [String!]
  postcode_lt: String
  postcode_lte: String
  postcode_gt: String
  postcode_gte: String
  postcode_contains: String
  postcode_not_contains: String
  postcode_starts_with: String
  postcode_not_starts_with: String
  postcode_ends_with: String
  postcode_not_ends_with: String
  state: String
  state_not: String
  state_in: [String!]
  state_not_in: [String!]
  state_lt: String
  state_lte: String
  state_gt: String
  state_gte: String
  state_contains: String
  state_not_contains: String
  state_starts_with: String
  state_not_starts_with: String
  state_ends_with: String
  state_not_ends_with: String
  country: String
  country_not: String
  country_in: [String!]
  country_not_in: [String!]
  country_lt: String
  country_lte: String
  country_gt: String
  country_gte: String
  country_contains: String
  country_not_contains: String
  country_starts_with: String
  country_not_starts_with: String
  country_ends_with: String
  country_not_ends_with: String
  contactNumber: String
  contactNumber_not: String
  contactNumber_in: [String!]
  contactNumber_not_in: [String!]
  contactNumber_lt: String
  contactNumber_lte: String
  contactNumber_gt: String
  contactNumber_gte: String
  contactNumber_contains: String
  contactNumber_not_contains: String
  contactNumber_starts_with: String
  contactNumber_not_starts_with: String
  contactNumber_ends_with: String
  contactNumber_not_ends_with: String
  sessions_every: ClassSessionWhereInput
  sessions_some: ClassSessionWhereInput
  sessions_none: ClassSessionWhereInput
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
  createClassCategory(data: ClassCategoryCreateInput!): ClassCategory!
  updateClassCategory(data: ClassCategoryUpdateInput!, where: ClassCategoryWhereUniqueInput!): ClassCategory
  updateManyClassCategories(data: ClassCategoryUpdateManyMutationInput!, where: ClassCategoryWhereInput): BatchPayload!
  upsertClassCategory(where: ClassCategoryWhereUniqueInput!, create: ClassCategoryCreateInput!, update: ClassCategoryUpdateInput!): ClassCategory!
  deleteClassCategory(where: ClassCategoryWhereUniqueInput!): ClassCategory
  deleteManyClassCategories(where: ClassCategoryWhereInput): BatchPayload!
  createClassSession(data: ClassSessionCreateInput!): ClassSession!
  updateClassSession(data: ClassSessionUpdateInput!, where: ClassSessionWhereUniqueInput!): ClassSession
  updateManyClassSessions(data: ClassSessionUpdateManyMutationInput!, where: ClassSessionWhereInput): BatchPayload!
  upsertClassSession(where: ClassSessionWhereUniqueInput!, create: ClassSessionCreateInput!, update: ClassSessionUpdateInput!): ClassSession!
  deleteClassSession(where: ClassSessionWhereUniqueInput!): ClassSession
  deleteManyClassSessions(where: ClassSessionWhereInput): BatchPayload!
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
  classCategory(where: ClassCategoryWhereUniqueInput!): ClassCategory
  classCategories(where: ClassCategoryWhereInput, orderBy: ClassCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassCategory]!
  classCategoriesConnection(where: ClassCategoryWhereInput, orderBy: ClassCategoryOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassCategoryConnection!
  classSession(where: ClassSessionWhereUniqueInput!): ClassSession
  classSessions(where: ClassSessionWhereInput, orderBy: ClassSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [ClassSession]!
  classSessionsConnection(where: ClassSessionWhereInput, orderBy: ClassSessionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): ClassSessionConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Subscription {
  class(where: ClassSubscriptionWhereInput): ClassSubscriptionPayload
  classCategory(where: ClassCategorySubscriptionWhereInput): ClassCategorySubscriptionPayload
  classSession(where: ClassSessionSubscriptionWhereInput): ClassSessionSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  email: String!
  displayName: String
  firstName: String!
  lastName: String!
  password: String!
  userGroup: String!
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
  userGroup: String!
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
  userGroup: String!
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
  userGroup: String!
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