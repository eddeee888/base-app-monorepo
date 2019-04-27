export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
}

export interface ClassCategory {
  id: string;
  name: string;
}
export interface SignupInput {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
}
export interface SignupPayload {
  user: User;
}

export interface LoginPayload {
  user: User;
}

export interface CreateClassCategoryPayload {
  classCategory: ClassCategory;
}

export interface Class {
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
}

export interface ClassSession {
  startTime: string;
  endTime: string;
  capacity: number;
}

export interface ClassSavePayload {
  class: Class;
}
