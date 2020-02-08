import createRoute from './createRoute';
import createExternalRoute from './createExternalRoute';

const routes = {
  home: createExternalRoute('/'),
  login: createRoute('/app/login'),
  signup: createRoute('/app/signup'),
  logout: createRoute('/app/logout'),
  me: createRoute('/app/me')
};

export default routes;
