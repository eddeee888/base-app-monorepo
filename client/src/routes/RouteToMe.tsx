/* This file was automatically generated and should not be edited. */
import { generateUrl } from 'route-codegen';
import React from 'react';
import Link, { LinkProps as OriginalLinkProps } from 'common/components/Link';
import { useHistory } from 'react-router';

const pattern = '/app/me';

type OmittedLinkProps = Omit<OriginalLinkProps, 'to'>;

interface UrlParts {
  urlQuery?: Partial<Record<string, string>>;
}

type RouteLinkProps = OmittedLinkProps & UrlParts;

interface ReactRouterRoute {
  pattern: string;
  generate: (urlParts: UrlParts) => string;
  Link: React.FunctionComponent<RouteLinkProps>;

  useRedirect: (urlParts: UrlParts) => () => void;
}

const RouteToMe: ReactRouterRoute = {
  pattern,
  generate: ({ urlQuery }) => generateUrl(pattern, {}, urlQuery),
  Link: function RouteLink({ urlQuery, ...props }) {
    const to = generateUrl(pattern, {}, urlQuery);
    return <Link to={to} {...props} />;
  },

  useRedirect: ({ urlQuery }) => {
    const history = useHistory();
    const to = generateUrl(pattern, {}, urlQuery);
    return () => history.push(to);
  }
};

export default RouteToMe;
