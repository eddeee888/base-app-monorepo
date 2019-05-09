import { getUrlQuery, UrlQuery } from 'common/helpers/pathing';
import useReactRouter from 'use-react-router';

const useUrlQuery: () => UrlQuery = () => {
  const { location } = useReactRouter();

  return getUrlQuery(location.search);
};

export default useUrlQuery;
