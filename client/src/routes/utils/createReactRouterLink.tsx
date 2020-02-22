/* This file was automatically generated and should not be edited. */

import React from 'react';
import generateUrl from './generateUrl';
import { Link, LinkProps as ReactRouterLinkProps } from 'react-router-dom';

export interface LinkProps<P> extends Omit<ReactRouterLinkProps, 'to'> {
  params: P;
  urlQuery?: Record<string, string>;
}

function createReactRouterLink<P = {}>(pattern: string) {
  return function ReactRouterLink({ params, urlQuery, ...props }: LinkProps<P>): any {
    const to = generateUrl(pattern, params as any, urlQuery);
    return <Link {...props} to={to} />;
  };
}

export default createReactRouterLink;
