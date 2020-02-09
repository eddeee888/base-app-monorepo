import createExternalRoute from 'src/common/pathing/createExternalRoute';
import createNextJsRoute from 'src/common/pathing/createNextJsRoute';

export type HostClassSubform = 'details' | 'contact' | 'sessions' | 'images' | 'summary';

const routes = {
  home: createNextJsRoute('/'),
  login: createExternalRoute('/app/login'),
  signup: createExternalRoute('/app/signup'),
  logout: createExternalRoute('/app/logout'),
  me: createExternalRoute('/app/me')
};

export default routes;
