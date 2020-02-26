/* This file was automatically generated and should not be edited. */
import createLink, { LinkProps } from 'src/common/pathing/createNextJSLink';

import { generateUrl } from 'route-codegen';

interface NextJSRoute<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: Partial<Record<string, string>>) => string;
  Link: React.FunctionComponent<LinkProps<P>>;
}

function createNextJSRoute<P = {}>(pattern: string): NextJSRoute<P> {
  return {
    pattern,
    generate: (inputParams, urlQuery) => generateUrl(pattern, inputParams as any, urlQuery),
    Link: createLink(pattern)
  };
}

export default createNextJSRoute;
