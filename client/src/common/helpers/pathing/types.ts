export enum Paths {
  home = '/',
  login = '/login',
  signup = '/signup',
  logout = '/logout',
  dashboard = '/dashboard',
  createClass = '/create-a-class'
}

export interface QueryStringOptions {
  redirect?: Paths;
}

export interface LinkgenOptions {
  query?: QueryStringOptions;
}
