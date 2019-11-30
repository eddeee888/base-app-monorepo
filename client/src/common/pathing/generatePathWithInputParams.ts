import { UrlQuery } from './types';
import { generatePath } from 'react-router';

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

export default generatePathWithInputParams;
