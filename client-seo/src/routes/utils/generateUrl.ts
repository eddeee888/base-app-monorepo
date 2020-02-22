/* This file was automatically generated and should not be edited. */
import { generatePath } from 'react-router';

export type GenerateUrl = <P>(pattern: string, inputParams: P, urlQuery?: Record<string, string>) => string;

const generateQueryString = (urlQuery?: Record<string, string>): string => {
  if (!urlQuery) {
    return '';
  }

  let result = '?';
  Object.keys(urlQuery).forEach(queryKey => {
    result += `${queryKey}=${urlQuery[queryKey]}&`;
  });
  result = result.substring(0, result.length - 1);

  return result;
};

const generateUrl: GenerateUrl = <P>(pattern: string, inputParams: P, urlQuery?: Record<string, string>): string =>
  generatePath(pattern, inputParams as any) + generateQueryString(urlQuery);

export default generateUrl;
