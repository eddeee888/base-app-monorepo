/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ClassSessionDay } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: ClassData
// ====================================================

export interface ClassData_class_category {
  __typename: "ClassCategory";
  id: string;
  name: string;
}

export interface ClassData_class_sessions {
  __typename: "ClassSession";
  id: string;
  day: ClassSessionDay;
  startTime: string;
  endTime: string;
  capacity: number;
}

export interface ClassData_class {
  __typename: "Class";
  id: string;
  name: string;
  price: number;
  category: ClassData_class_category;
  description: string;
  streetAddress: string;
  city: string;
  postcode: string;
  country: string;
  contactNumber: string;
  state: string;
  streetUnit: string;
  sessions: ClassData_class_sessions[];
}

export interface ClassData {
  class: ClassData_class | null;
}

export interface ClassDataVariables {
  classId: string;
}
