import { generatePath } from 'react-router';
import { UrlQuery } from './types';

interface LinkGenerator<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: UrlQuery) => string;
}

const generateQueryString = (urlQuery?: UrlQuery): string => {
  if (!urlQuery) {
    return '';
  }

  let result = '?';

  (Object.keys(urlQuery) as (keyof UrlQuery)[]).forEach(queryKey => {
    result += `${queryKey}=${urlQuery[queryKey]}&`;
  });
  result = result.substring(0, result.length - 1);

  return result;
};

function createLinkGenerator<P>(pattern: string): LinkGenerator<P> {
  return {
    pattern,
    generate: (inputParams, urlQuery) => {
      return (
        generatePath(pattern, inputParams as any) +
        generateQueryString(urlQuery)
      );
    }
  };
}

export default createLinkGenerator;
