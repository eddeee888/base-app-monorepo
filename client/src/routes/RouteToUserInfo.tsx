/* This file was automatically generated and should not be edited. */
import { generateUrl } from 'route-codegen';
import React from 'react';
import Link, { LinkProps as OriginalLinkProps } from 'common/components/Link';
import { useRouteMatch, useHistory } from 'react-router';

const pattern = '/app/users/:id/:subview(profile|pictures)?';

export interface RouteToUserInfoPathParams {
  id: string;
  subview?: 'profile' | 'pictures';
}

type OmittedLinkProps = Omit<OriginalLinkProps, 'to'>;

interface UrlParts<P> {
  path: P;
  urlQuery?: Partial<Record<string, string>>;
}

type RouteLinkProps<P> = OmittedLinkProps & UrlParts<P>;

interface ReactRouterRoute<P> {
  pattern: string;
  generate: (urlParts: UrlParts<P>) => string;
  Link: React.FunctionComponent<RouteLinkProps<P>>;
  useParams: () => P;
  useRedirect: (urlParts: UrlParts<P>) => () => void;
}

const RouteToUserInfo: ReactRouterRoute<RouteToUserInfoPathParams> = {
  pattern,
  generate: ({ path, urlQuery }) => generateUrl(pattern, path, urlQuery),
  Link: function RouteLink({ path, urlQuery, ...props }) {
    const to = generateUrl(pattern, path, urlQuery);
    return <Link {...props} to={to} />;
  },
  useParams: () => {
    const { path, params } = useRouteMatch<RouteToUserInfoPathParams>();

    if (path !== pattern) {
      const error = `You are trying to use useParams for "${pattern}" in "${path}". Make sure you are using the right route link object!`;
      throw new Error(error);
    }

    return params;
  },
  useRedirect: ({ path, urlQuery }) => {
    const history = useHistory();
    const to = generateUrl(pattern, path, urlQuery);
    return () => history.push(to);
  }
};

export default RouteToUserInfo;
