/* This file was automatically generated and should not be edited. */
import { generateUrl } from 'route-codegen';

const pattern = '/app/logout';

interface UrlParts {
  urlQuery?: Partial<Record<string, string>>;
}

interface DefaultRoute {
  pattern: string;
  generate: (urlParts: UrlParts) => string;
}

const RouteToLogout: DefaultRoute = {
  pattern,
  generate: ({ urlQuery }) => generateUrl(pattern, {}, urlQuery)
};

export default RouteToLogout;
