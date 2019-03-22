import { RouteComponentProps } from 'react-router';
import { getQueryStringOptions, UrlQuery } from 'src/common/helpers/pathing';

type UseRouterPropsFn = (
  routerProps?: RouteComponentProps
) => {
  queryStringOptions: UrlQuery;
};

const useRouterProps: UseRouterPropsFn = routerProps => {
  let queryStringOptions: UrlQuery = {};

  if (routerProps) {
    queryStringOptions = getQueryStringOptions(routerProps.location.search);
  }

  return {
    queryStringOptions
  };
};

export default useRouterProps;
