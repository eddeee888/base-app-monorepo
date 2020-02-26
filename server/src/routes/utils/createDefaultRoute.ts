/* This file was automatically generated and should not be edited. */

import { generateUrl } from 'route-codegen';

interface DefaultRoute<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: Partial<Record<string, string>>) => string;
}

function createDefaultRoute<P = {}>(pattern: string): DefaultRoute<P> {
  return {
    pattern,
    generate: (inputParams, urlQuery) => generateUrl(pattern, inputParams as any, urlQuery)
  };
}

export default createDefaultRoute;
