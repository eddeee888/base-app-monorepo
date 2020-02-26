/* This file was automatically generated and should not be edited. */
import createLink, { LinkProps } from 'common/pathing/createReactRouterLink';

import { useRouteMatch } from 'react-router';
import { useHistory } from 'react-router';

import { generateUrl } from 'route-codegen';

interface ReactRouterRoute<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: Partial<Record<string, string>>) => string;
  Link: React.FunctionComponent<LinkProps<P>>;
  useParams: () => P;
  useRedirect: (inputParams: P, urlQuery?: Partial<Record<string, string>>) => () => void;
}

function createReactRouterRoute<P = {}>(pattern: string): ReactRouterRoute<P> {
  return {
    pattern,
    generate: (inputParams, urlQuery) => generateUrl(pattern, inputParams as any, urlQuery),
    Link: createLink(pattern),
    useParams: () => {
      const { path, params } = useRouteMatch<P>();

      if (path !== pattern) {
        const error = `You are trying to use useParams for "${pattern}" in "${path}". Make sure you are using the right route link object!`;
        throw new Error(error);
      }

      return params;
    },
    useRedirect: (inputParams, urlQuery) => {
      const history = useHistory();
      const to = generateUrl(pattern, inputParams as any, urlQuery);
      return () => history.push(to);
    }
  };
}

export default createReactRouterRoute;
