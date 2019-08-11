import { generatePath } from 'react-router';
import { UrlQuery } from './types';
import useParams from './useParams';
import useMatchedPath from './useMatchedPath';
import useRedirect from './useRedirect';

interface Route<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: UrlQuery) => string;
  useParams: () => P;
  useRedirect: (inputParams: P, urlQuery?: UrlQuery) => () => void;
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

const generatePathWithInputParams = <P>(
  pattern: string,
  inputParams: P,
  urlQuery?: UrlQuery
): string =>
  generatePath(pattern, inputParams as any) + generateQueryString(urlQuery);

function createRoute<P>(pattern: string): Route<P> {
  return {
    pattern,
    generate: (inputParams, urlQuery) =>
      generatePathWithInputParams<P>(pattern, inputParams, urlQuery),
    useParams: () => {
      const path = useMatchedPath();

      if (path !== pattern) {
        throw new Error(
          `You are trying to use useParams for "${pattern}" in "${path}". Make sure you are using the right route link object!`
        );
      }

      return useParams<P>();
    },
    useRedirect: (inputParams, urlQuery) =>
      useRedirect(
        generatePathWithInputParams<P>(pattern, inputParams, urlQuery)
      )
  };
}

export default createRoute;
