/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum ClassSessionDay {
  FRIDAY = "FRIDAY",
  MONDAY = "MONDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
  THURSDAY = "THURSDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
}

export interface ClassSaveInput {
  name: string;
  price: number;
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

export interface LoginInput {
  email: string;
  password: string;
}

export interface SignupInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
