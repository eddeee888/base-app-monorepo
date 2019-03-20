import { RouteComponentProps } from 'react-router';
import { QueryStringKeys } from 'src/common/helpers/pathing';
import useRouterProps from './useRouterProps';

const defaultRouterProps: RouteComponentProps = {
  history: {} as any,
  location: {} as any,
  match: {} as any
};

describe('useRouterProps(): no param', () => {
  it('should return an object with empty objects', () => {
    const result = useRouterProps();
    expect(result).toEqual({
      queryStringOptions: {}
    });
  });
});

describe('useRouterProps(): check query string', () => {
  Object.keys(QueryStringKeys).forEach(key => {
    it(`should return ${key} in queryStringOptions if passed in`, () => {
      const routerProps: RouteComponentProps = {
        ...defaultRouterProps,
        location: {
          pathname: '',
          search: `?${key}=abcdef`,
          state: '',
          hash: ''
        }
      };
      const result = useRouterProps(routerProps);
      expect(result.queryStringOptions).toEqual({ [key]: 'abcdef' });
    });
  });

  it(`should pick up valid query string if some invalid ones are passed in`, () => {
    const routerProps: RouteComponentProps = {
      ...defaultRouterProps,
      location: {
        pathname: '',
        search: `?invalid_query_string=abcdef&redirect=/login&invalid_query_string_2=zzz`,
        state: '',
        hash: ''
      }
    };
    const result = useRouterProps(routerProps);
    expect(result.queryStringOptions).toEqual({
      redirect: '/login'
    });
  });

  it(`should ignore if 1 invalid query string is passed in`, () => {
    const routerProps: RouteComponentProps = {
      ...defaultRouterProps,
      location: {
        pathname: '',
        search: `?invalid_query_string=abcdef`,
        state: '',
        hash: ''
      }
    };
    const result = useRouterProps(routerProps);
    expect(result.queryStringOptions).toEqual({});
  });

  it(`should ignore if multiple invalid query string is passed in`, () => {
    const routerProps: RouteComponentProps = {
      ...defaultRouterProps,
      location: {
        pathname: '',
        search: `?invalid_query_string_1=abcdef&invalid_query_string_2=abcdef`,
        state: '',
        hash: ''
      }
    };
    const result = useRouterProps(routerProps);
    expect(result.queryStringOptions).toEqual({});
  });

  it('should return empty object for queryStringOptions if nothing is passed in', () => {
    const routerProps: RouteComponentProps = {
      ...defaultRouterProps,
      location: {
        pathname: '',
        search: '',
        state: '',
        hash: ''
      }
    };
    const result = useRouterProps(routerProps);
    expect(result.queryStringOptions).toEqual({});
  });
});
