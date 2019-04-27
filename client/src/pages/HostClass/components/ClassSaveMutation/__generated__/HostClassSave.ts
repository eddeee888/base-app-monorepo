/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

import { ClassSaveInput, ClassSessionDay } from "./../../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: HostClassSave
// ====================================================

export interface HostClassSave_classSave_class_sessions {
  __typename: "ClassSession";
  id: string;
  day: ClassSessionDay;
  startTime: string;
  endTime: string;
  capacity: number;
}

export interface HostClassSave_classSave_class {
  __typename: "Class";
  id: string;
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
  sessions: HostClassSave_classSave_class_sessions[];
}

export interface HostClassSave_classSave {
  __typename: "ClassSavePayload";
  class: HostClassSave_classSave_class;
}

export interface HostClassSave {
  classSave: HostClassSave_classSave;
}

export interface HostClassSaveVariables {
  input: ClassSaveInput;
}
