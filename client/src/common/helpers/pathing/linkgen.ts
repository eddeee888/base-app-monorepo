import Paths from './Paths';

interface QueryOptions {
  redirect?: string;
}

interface LinkgenOptions {
  query?: QueryOptions;
}

type LinkgenFn = (path: Paths, options?: LinkgenOptions) => string;

const linkgen: LinkgenFn = (path, options) => {
  let urlParts = '';

  if (options) {
    if (options.query) {
      urlParts += '?';
      (Object.keys(options.query) as Array<keyof QueryOptions>).forEach(
        queryKey => {
          urlParts += `${queryKey}=${options.query![queryKey]}&`;
        }
      );
      urlParts = urlParts.substring(0, urlParts.length - 1);
    }
  }

  return path + urlParts;
};

export default linkgen;
