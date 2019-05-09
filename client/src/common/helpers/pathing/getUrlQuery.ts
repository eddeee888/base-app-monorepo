import { GetUrlQueryFn, UrlQuery, UrlQueryKeys } from './types';

const isQueryStringKey = (key: string): key is keyof typeof UrlQueryKeys => {
  const found = Object.keys(UrlQueryKeys).filter(qsKey => qsKey === key);
  return found.length > 0;
};

const getUrlQuery: GetUrlQueryFn = queryString => {
  const result: UrlQuery = {};

  const stripped = queryString.replace('?', '');
  const optionsString = stripped.split('&');
  optionsString.forEach(optionPair => {
    const [key, value] = optionPair.split('=');
    if (isQueryStringKey(key)) {
      result[key] = value;
    }
  });

  return result;
};

export default getUrlQuery;
