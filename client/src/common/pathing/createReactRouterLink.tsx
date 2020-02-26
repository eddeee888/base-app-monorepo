import React from 'react';
import Link, { LinkProps as ReactRouterLinkProps } from 'common/components/Link';
import { generateUrl } from 'route-codegen';

export interface LinkProps<P> extends Omit<ReactRouterLinkProps, 'to'> {
  params: P;
  urlQuery?: Partial<Record<string, string>>;
}

function createReactRouterLink<P = {}>(pattern: string) {
  return function RouteLink({ params, urlQuery, ...props }: LinkProps<P>) {
    const to = generateUrl(pattern, params as any, urlQuery);
    return <Link {...props} to={to} />;
  };
}

export default createReactRouterLink;
