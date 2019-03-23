import { LinkgenOptions, Paths, UrlQuery } from './types';

type LinkgenFn = (path: Paths, options?: LinkgenOptions) => string;

const linkgen: LinkgenFn = (path, options) => {
  let urlParts = '';

  if (options) {
    urlParts += generateQueryString(options.query);
  }

  return path + urlParts;
};

const generateQueryString = (urlQuery?: UrlQuery): string => {
  if (!urlQuery) {
    return '';
  }

  let result: string = '?';

  (Object.keys(urlQuery) as Array<keyof UrlQuery>).forEach(queryKey => {
    result += `${queryKey}=${urlQuery[queryKey]}&`;
  });
  result = result.substring(0, result.length - 1);

  return result;
};

export default linkgen;
