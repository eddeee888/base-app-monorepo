export const expiresIn = 60 * 60 * 24 * 7; // equivalent of 7 days in seconds

export interface JWTPayload {
  id: string;
}

export interface JWTObject {
  iat: number;
  exp: number;
  aud: string;
  iss: string;
  sub: string;
  viewer: JWTPayload;
}
