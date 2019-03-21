import {
  GetQueryStringOptionsFn,
  QueryStringKeys,
  QueryStringOptions
} from './types';

const isQueryStringKey = (key: string): key is keyof typeof QueryStringKeys => {
  const found = Object.keys(QueryStringKeys).filter(qsKey => qsKey === key);
  return found.length > 0;
};

const getQueryStringOptions: GetQueryStringOptionsFn = queryString => {
  const result: QueryStringOptions = {};

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

export default getQueryStringOptions;
