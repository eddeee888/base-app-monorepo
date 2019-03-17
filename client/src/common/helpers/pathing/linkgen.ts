import { LinkgenOptions, Paths, QueryStringOptions } from './types';

type LinkgenFn = (path: Paths, options?: LinkgenOptions) => string;

const linkgen: LinkgenFn = (path, options) => {
  let urlParts = '';

  if (options) {
    urlParts += generateQueryPart(options.query);
  }

  return path + urlParts;
};

const generateQueryPart = (queryStringOptions?: QueryStringOptions): string => {
  if (!queryStringOptions) {
    return '';
  }

  let result = '?';

  (Object.keys(queryStringOptions) as Array<keyof QueryStringOptions>).forEach(
    queryKey => {
      result += `${queryKey}=${queryStringOptions[queryKey]}&`;
    }
  );
  result = result.substring(0, result.length - 1);

  return result;
};

export default linkgen;
