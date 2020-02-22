/* This file was automatically generated and should not be edited. */

import createLink, { LinkProps } from 'common/pathing/createDefaultLink';
import generateUrl from './generateUrl';

interface DefaultRoute<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: Record<string, string>) => string;
  Link: React.FunctionComponent<LinkProps<P>>;
}

function createDefaultRoute<P = {}>(pattern: string): DefaultRoute<P> {
  return {
    pattern,
    generate: (inputParams, urlQuery) => generateUrl(pattern, inputParams as any, urlQuery),
    Link: createLink(pattern)
  };
}

export default createDefaultRoute;
