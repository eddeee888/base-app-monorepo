import React from 'react';
import DefaultLink, {
  LinkProps as DefaultLinkProps
} from 'common/components/Link';
import generatePathWithInputParams from 'common/pathing/generatePathWithInputParams';
import { UrlQuery } from 'common/pathing/types';

export interface LinkProps<P> extends Omit<DefaultLinkProps, 'to'> {
  pattern: string;
  params: P;
  urlQuery?: UrlQuery;
}

function Link<P>({
  pattern,
  params,
  urlQuery,
  ...props
}: LinkProps<P>): ReturnType<typeof DefaultLink> {
  const to = generatePathWithInputParams(pattern, params, urlQuery);
  return <DefaultLink {...props} to={to} />;
}

export default Link;
