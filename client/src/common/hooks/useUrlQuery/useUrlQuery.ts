import { getUrlQuery, UrlQuery } from 'src/common/helpers/pathing';
import useReactRouter from 'use-react-router';

function useUrlQuery(): UrlQuery {
  const { location } = useReactRouter();

  return getUrlQuery(location.search);
}

export default useUrlQuery;
