import { useContext } from 'react';
import { RouteComponentProps } from 'react-router';
import ViewerContext, { Viewer } from '../components/ViewerContext';
import { getQueryStringOptions, QueryStringOptions } from '../helpers/pathing';

type Param =
  | {
      routerProps?: RouteComponentProps;
    }
  | undefined;

type UseRouteCheckerFn = (
  param: Param
) => {
  viewer: Viewer | null;
  queryStringOptions: QueryStringOptions;
};

const useRouteChecker: UseRouteCheckerFn = param => {
  const { viewer } = useContext(ViewerContext);
  let queryStringOptions: QueryStringOptions = {};

  if (param && param.routerProps) {
    queryStringOptions = getQueryStringOptions(
      param.routerProps.location.search
    );
  }

  return {
    viewer,
    queryStringOptions
  };
};

export default useRouteChecker;
