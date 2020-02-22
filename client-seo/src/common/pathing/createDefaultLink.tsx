import React from 'react';
import Anchor, { AnchorProps } from 'src/common/ui/Anchor';
import generateUrl from 'src/routes/utils/generateUrl';

export interface LinkProps<P> extends Omit<AnchorProps, 'href'> {
  params: P;
  urlQuery?: Record<string, string>;
}

function createDefaultLink<P = {}>(pattern: string) {
  return function RouteLink({ params, urlQuery, ...props }: LinkProps<P>) {
    const to = generateUrl(pattern, params as any, urlQuery);
    return <Anchor href={to} {...props} />;
  };
}

export default createDefaultLink;
