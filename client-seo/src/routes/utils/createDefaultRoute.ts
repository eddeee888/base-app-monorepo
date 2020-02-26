/* This file was automatically generated and should not be edited. */
import createLink, { LinkProps } from 'src/common/pathing/createDefaultLink';

import { generateUrl } from 'route-codegen';

interface DefaultRoute<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: Partial<Record<string, string>>) => string;
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
