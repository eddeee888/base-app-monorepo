import { RouteComponentProps } from 'react-router';
import {
  getQueryStringOptions,
  QueryStringOptions
} from 'src/common/helpers/pathing';

type UseRouterPropsFn = (
  routerProps?: RouteComponentProps
) => {
  queryStringOptions: QueryStringOptions;
};

const useRouterProps: UseRouterPropsFn = routerProps => {
  let queryStringOptions: QueryStringOptions = {};

  if (routerProps) {
    queryStringOptions = getQueryStringOptions(routerProps.location.search);
  }

  return {
    queryStringOptions
  };
};

export default useRouterProps;
