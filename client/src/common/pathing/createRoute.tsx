import React from 'react';
import { useRouteMatch } from 'react-router';
import { UrlQuery } from './types';
import generatePathWithInputParams from './generatePathWithInputParams';
import useRedirect from './useRedirect';
import Link, { LinkProps } from './Link';

interface Route<P> {
  pattern: string;
  generate: (inputParams: P, urlQuery?: UrlQuery) => string;
  useParams: () => P;
  useRedirect: (inputParams: P, urlQuery?: UrlQuery) => () => void;
  Link: (props: Omit<LinkProps<P>, 'pattern'>) => ReturnType<typeof Link>;
}

function createRoute<P>(pattern: string): Route<P> {
  function RouteLink(
    props: Omit<LinkProps<P>, 'pattern'>
  ): ReturnType<typeof Link> {
    return <Link pattern={pattern} {...props} />;
  }

  return {
    pattern,
    generate: (inputParams, urlQuery) =>
      generatePathWithInputParams<P>(pattern, inputParams, urlQuery),
    useParams: () => {
      const { path, params } = useRouteMatch<P>();

      if (path !== pattern) {
        throw new Error(
          `You are trying to use useParams for "${pattern}" in "${path}". Make sure you are using the right route link object!`
        );
      }

      return params;
    },
    useRedirect: (inputParams, urlQuery) =>
      useRedirect(
        generatePathWithInputParams<P>(pattern, inputParams, urlQuery)
      ),
    Link: RouteLink
  };
}

export default createRoute;
