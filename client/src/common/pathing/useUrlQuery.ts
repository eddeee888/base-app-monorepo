import { useLocation } from 'react-router';
import { UrlQuery } from 'common/pathing';
import getUrlQuery from './getUrlQuery';

const useUrlQuery: () => UrlQuery = () => {
  const location = useLocation();

  return getUrlQuery(location.search);
};

export default useUrlQuery;
