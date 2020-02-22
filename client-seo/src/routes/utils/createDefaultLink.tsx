/* This file was automatically generated and should not be edited. */

import React from 'react';
import generateUrl from './generateUrl';

type AnchorProps = React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>;

export interface LinkProps<P> extends Omit<AnchorProps, 'href'> {
  params: P;
  urlQuery?: Record<string, string>;
}

function createDefaultLink<P = {}>(pattern: string) {
  return function RouteLink({ params, urlQuery, ...props }: LinkProps<P>) {
    const to = generateUrl(pattern, params as any, urlQuery);
    return <a href={to} {...props} />;
  };
}

export default createDefaultLink;
