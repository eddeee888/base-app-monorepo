// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from 'graphql';
import {
  User,
  ClassCategory,
  CreateClassCategoryPayload,
  SignupPayload,
  LoginPayload,
  ClassSavePayload,
  Class,
  ClassSession
} from '../models';
import { ResolverContext } from '../../../types';

type ClassSessionDay =
  | 'MONDAY'
  | 'TUESDAY'
  | 'WEDNESDAY'
  | 'THURSDAY'
  | 'FRIDAY'
  | 'SATURDAY'
  | 'SUNDAY';

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export interface ArgsUser {
    id: string;
  }

  export type UserResolver = (
    parent: undefined,
    args: ArgsUser,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => User | null | Promise<User | null>;

  export type ClassCategoriesResolver = (
    parent: undefined,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ClassCategory[] | Promise<ClassCategory[]>;

  export interface Type {
    user: (
      parent: undefined,
      args: ArgsUser,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => User | null | Promise<User | null>;

    classCategories: (
      parent: undefined,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ClassCategory[] | Promise<ClassCategory[]>;
  }
}

export namespace UserResolvers {
  export const defaultResolvers = {
    id: (parent: User) => parent.id,
    email: (parent: User) => parent.email,
    firstName: (parent: User) => parent.firstName,
    lastName: (parent: User) => parent.lastName,
    displayName: (parent: User) =>
      parent.displayName === undefined ? null : parent.displayName
  };

  export type IdResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EmailResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type FirstNameResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type LastNameResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DisplayNameResolver = (
    parent: User,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    id: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    email: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    firstName: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    lastName: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    displayName: (
      parent: User,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export namespace ClassCategoryResolvers {
  export const defaultResolvers = {
    id: (parent: ClassCategory) => parent.id,
    name: (parent: ClassCategory) => parent.name
  };

  export type IdResolver = (
    parent: ClassCategory,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: ClassCategory,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export interface Type {
    id: (
      parent: ClassCategory,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: ClassCategory,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;
  }
}

export namespace MutationResolvers {
  export const defaultResolvers = {};

  export interface CreateClassCategoryInput {
    name: string;
  }
  export interface SignupInput {
    email: string;
    firstName: string;
    lastName: string;
    password: string;
  }
  export interface LoginInput {
    email: string;
    password: string;
  }
  export interface ClassSaveInput {
    name: string;
    category: string;
    description: string;
    streetAddress: string;
    city: string;
    postcode: string;
    country: string;
    contactNumber: string;
    state: string;
    streetUnit: string;
    sessions: ClassSessionInput[];
  }
  export interface ClassSessionInput {
    day: ClassSessionDay;
    startTime: string;
    endTime: string;
    capacity: number;
  }

  export interface ArgsCreateClassCategory {
    input: CreateClassCategoryInput;
  }

  export interface ArgsSignup {
    input: SignupInput;
  }

  export interface ArgsLogin {
    input: LoginInput;
  }

  export interface ArgsClassSave {
    input: ClassSaveInput;
  }

  export type CreateClassCategoryResolver = (
    parent: undefined,
    args: ArgsCreateClassCategory,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => CreateClassCategoryPayload | Promise<CreateClassCategoryPayload>;

  export type SignupResolver = (
    parent: undefined,
    args: ArgsSignup,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => SignupPayload | Promise<SignupPayload>;

  export type LoginResolver = (
    parent: undefined,
    args: ArgsLogin,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => LoginPayload | null | Promise<LoginPayload | null>;

  export type LogoutResolver = (
    parent: undefined,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => boolean | Promise<boolean>;

  export type ClassSaveResolver = (
    parent: undefined,
    args: ArgsClassSave,
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ClassSavePayload | Promise<ClassSavePayload>;

  export interface Type {
    createClassCategory: (
      parent: undefined,
      args: ArgsCreateClassCategory,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => CreateClassCategoryPayload | Promise<CreateClassCategoryPayload>;

    signup: (
      parent: undefined,
      args: ArgsSignup,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => SignupPayload | Promise<SignupPayload>;

    login: (
      parent: undefined,
      args: ArgsLogin,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => LoginPayload | null | Promise<LoginPayload | null>;

    logout: (
      parent: undefined,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => boolean | Promise<boolean>;

    classSave: (
      parent: undefined,
      args: ArgsClassSave,
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ClassSavePayload | Promise<ClassSavePayload>;
  }
}

export namespace CreateClassCategoryPayloadResolvers {
  export const defaultResolvers = {
    classCategory: (parent: CreateClassCategoryPayload) => parent.classCategory
  };

  export type ClassCategoryResolver = (
    parent: CreateClassCategoryPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ClassCategory | Promise<ClassCategory>;

  export interface Type {
    classCategory: (
      parent: CreateClassCategoryPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ClassCategory | Promise<ClassCategory>;
  }
}

export namespace SignupPayloadResolvers {
  export const defaultResolvers = {
    user: (parent: SignupPayload) => parent.user
  };

  export type UserResolver = (
    parent: SignupPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    user: (
      parent: SignupPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace LoginPayloadResolvers {
  export const defaultResolvers = {
    user: (parent: LoginPayload) => parent.user
  };

  export type UserResolver = (
    parent: LoginPayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => User | Promise<User>;

  export interface Type {
    user: (
      parent: LoginPayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => User | Promise<User>;
  }
}

export namespace ClassSavePayloadResolvers {
  export const defaultResolvers = {
    class: (parent: ClassSavePayload) => parent.class
  };

  export type ClassResolver = (
    parent: ClassSavePayload,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => Class | Promise<Class>;

  export interface Type {
    class: (
      parent: ClassSavePayload,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => Class | Promise<Class>;
  }
}

export namespace ClassResolvers {
  export const defaultResolvers = {
    id: (parent: Class) => parent.id,
    name: (parent: Class) => parent.name,
    category: (parent: Class) => parent.category,
    description: (parent: Class) => parent.description,
    streetAddress: (parent: Class) => parent.streetAddress,
    city: (parent: Class) => parent.city,
    postcode: (parent: Class) => parent.postcode,
    country: (parent: Class) => parent.country,
    contactNumber: (parent: Class) => parent.contactNumber,
    state: (parent: Class) => parent.state,
    streetUnit: (parent: Class) => parent.streetUnit,
    sessions: (parent: Class) => parent.sessions
  };

  export type IdResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type NameResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CategoryResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ClassCategory | Promise<ClassCategory>;

  export type DescriptionResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StreetAddressResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CityResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type PostcodeResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CountryResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type ContactNumberResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StateResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type StreetUnitResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type SessionsResolver = (
    parent: Class,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ClassSession[] | Promise<ClassSession[]>;

  export interface Type {
    id: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    name: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    category: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ClassCategory | Promise<ClassCategory>;

    description: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    streetAddress: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    city: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    postcode: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    country: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    contactNumber: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    state: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    streetUnit: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    sessions: (
      parent: Class,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ClassSession[] | Promise<ClassSession[]>;
  }
}

export namespace ClassSessionResolvers {
  export const defaultResolvers = {
    id: (parent: ClassSession) => parent.id,
    day: (parent: ClassSession) => parent.day,
    startTime: (parent: ClassSession) => parent.startTime,
    endTime: (parent: ClassSession) => parent.endTime,
    capacity: (parent: ClassSession) => parent.capacity
  };

  export type IdResolver = (
    parent: ClassSession,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type DayResolver = (
    parent: ClassSession,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => ClassSessionDay | Promise<ClassSessionDay>;

  export type StartTimeResolver = (
    parent: ClassSession,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type EndTimeResolver = (
    parent: ClassSession,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => string | Promise<string>;

  export type CapacityResolver = (
    parent: ClassSession,
    args: {},
    ctx: ResolverContext,
    info: GraphQLResolveInfo
  ) => number | Promise<number>;

  export interface Type {
    id: (
      parent: ClassSession,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    day: (
      parent: ClassSession,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => ClassSessionDay | Promise<ClassSessionDay>;

    startTime: (
      parent: ClassSession,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    endTime: (
      parent: ClassSession,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => string | Promise<string>;

    capacity: (
      parent: ClassSession,
      args: {},
      ctx: ResolverContext,
      info: GraphQLResolveInfo
    ) => number | Promise<number>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  User: UserResolvers.Type;
  ClassCategory: ClassCategoryResolvers.Type;
  Mutation: MutationResolvers.Type;
  CreateClassCategoryPayload: CreateClassCategoryPayloadResolvers.Type;
  SignupPayload: SignupPayloadResolvers.Type;
  LoginPayload: LoginPayloadResolvers.Type;
  ClassSavePayload: ClassSavePayloadResolvers.Type;
  Class: ClassResolvers.Type;
  ClassSession: ClassSessionResolvers.Type;
}
