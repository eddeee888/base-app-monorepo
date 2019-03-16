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
