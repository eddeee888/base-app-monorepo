import Paths from './Paths';

interface QueryOptions {
  redirect?: Paths;
}

interface LinkgenOptions {
  query?: QueryOptions;
}

type LinkgenFn = (path: Paths, options?: LinkgenOptions) => string;

const linkgen: LinkgenFn = (path, options) => {
  let urlParts = '';

  if (options) {
    urlParts += generateQueryPart(options.query);
  }

  return path + urlParts;
};

const generateQueryPart = (queryOptions?: QueryOptions): string => {
  if (!queryOptions) {
    return '';
  }

  let result = '?';

  (Object.keys(queryOptions) as Array<keyof QueryOptions>).forEach(queryKey => {
    result += `${queryKey}=${queryOptions[queryKey]}&`;
  });
  result = result.substring(0, result.length - 1);

  return result;
};

export default linkgen;
