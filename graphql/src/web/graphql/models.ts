export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
}

export interface SignupPayload {
  user: User;
}

export interface LoginPayload {
  user: User;
}
