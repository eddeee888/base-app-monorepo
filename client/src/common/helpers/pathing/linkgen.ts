import { LinkgenOptions, Paths, QueryStringOptions } from './types';

type LinkgenFn = (path: Paths, options?: LinkgenOptions) => string;

const linkgen: LinkgenFn = (path, options) => {
  let urlParts = '';

  if (options) {
    urlParts += generateQueryString(options.query);
  }

  return path + urlParts;
};

const generateQueryString = (
  queryStringOptions?: QueryStringOptions
): string => {
  if (!queryStringOptions) {
    return '';
  }

  let result: string = '?';

  (Object.keys(queryStringOptions) as Array<keyof QueryStringOptions>).forEach(
    queryKey => {
      result += `${queryKey}=${queryStringOptions[queryKey]}&`;
    }
  );
  result = result.substring(0, result.length - 1);

  return result;
};

export default linkgen;
