import createRoute from './createRoute';

const routes = {
  home: createRoute('/'),
  login: createRoute('/login'),
  signup: createRoute('/signup'),
  logout: createRoute('/logout'),
  me: createRoute('/me'),
};

export default routes;
