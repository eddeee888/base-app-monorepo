import { RouteComponentProps } from 'react-router';
import {
  getQueryStringOptions,
  QueryStringOptions
} from 'src/common/helpers/pathing';

type Param =
  | {
      routerProps?: RouteComponentProps;
    }
  | undefined;

type UseRouterPropsFn = (
  param: Param
) => {
  queryStringOptions: QueryStringOptions;
};

const useRouterProps: UseRouterPropsFn = param => {
  let queryStringOptions: QueryStringOptions = {};

  if (param && param.routerProps) {
    queryStringOptions = getQueryStringOptions(
      param.routerProps.location.search
    );
  }

  return {
    queryStringOptions
  };
};

export default useRouterProps;
