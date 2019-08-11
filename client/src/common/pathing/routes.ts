import createRoute from './createRoute';

interface Users {
  userId?: string;
}

const routes = {
  home: createRoute('/'),
  login: createRoute('/login'),
  signup: createRoute('/signup'),
  logout: createRoute('/logout'),
  users: createRoute<Users>('/users/:userId?'),
};

export default routes;
