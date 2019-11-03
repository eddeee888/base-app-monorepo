export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  displayName?: string;
  avatar?: string;
}
export interface File {
  id: string;
  src: string;
  originalFilename: string;
}
