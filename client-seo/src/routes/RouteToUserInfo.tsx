/* This file was automatically generated and should not be edited. */
import { generateUrl } from 'route-codegen';
import React from 'react';
import Link, { AnchorProps as OriginalLinkProps } from 'src/common/ui/Anchor';

const pattern = '/app/users/:id/:subview(profile|pictures)?';

export interface RouteToUserInfoPathParams {
  id: string;
  subview?: 'profile' | 'pictures';
}

type OmittedLinkProps = Omit<OriginalLinkProps, 'href'>;

interface UrlParts<P> {
  path: P;
  urlQuery?: Partial<Record<string, string>>;
}

type RouteLinkProps<P> = OmittedLinkProps & UrlParts<P>;

interface DefaultRoute<P> {
  pattern: string;
  generate: (urlParts: UrlParts<P>) => string;
  Link: React.FunctionComponent<RouteLinkProps<P>>;
}

const RouteToUserInfo: DefaultRoute<RouteToUserInfoPathParams> = {
  pattern,
  generate: ({ path, urlQuery }) => generateUrl(pattern, path, urlQuery),
  Link: function RouteLink({ path, urlQuery, ...props }) {
    const to = generateUrl(pattern, path, urlQuery);
    return <Link {...props} href={to} />;
  }
};

export default RouteToUserInfo;
