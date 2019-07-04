import createLinkGenerator from './createLinkGenerator';

export interface UsersParams {
  userId?: string;
}

const routes = {
  home: createLinkGenerator('/'),
  login: createLinkGenerator('/login'),
  signup: createLinkGenerator('/signup'),
  logout: createLinkGenerator('/logout'),
  users: createLinkGenerator<UsersParams>('/users/:userId?'),
};

export default routes;
