import { getUrlQuery, UrlQuery } from 'common/pathing';
import useRouter from 'use-react-router';

const useUrlQuery: () => UrlQuery = () => {
  const router = useRouter();

  if (!router) {
    throw new Error('useUrlQuery must be used within a React Router');
  }

  return getUrlQuery(router.location.search);
};

export default useUrlQuery;
