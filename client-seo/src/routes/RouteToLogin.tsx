/* This file was automatically generated and should not be edited. */
import { generateUrl } from 'route-codegen';
import React from 'react';
import Link, { AnchorProps as OriginalLinkProps } from 'src/common/ui/Anchor';

const pattern = '/app/login';

type OmittedLinkProps = Omit<OriginalLinkProps, 'href'>;

interface UrlParts {
  urlQuery?: Partial<Record<string, string>>;
}

type RouteLinkProps = OmittedLinkProps & UrlParts;

interface DefaultRoute {
  pattern: string;
  generate: (urlParts: UrlParts) => string;
  Link: React.FunctionComponent<RouteLinkProps>;
}

const RouteToLogin: DefaultRoute = {
  pattern,
  generate: ({ urlQuery }) => generateUrl(pattern, {}, urlQuery),
  Link: function RouteLink({ urlQuery, ...props }) {
    const to = generateUrl(pattern, {}, urlQuery);
    return <Link href={to} {...props} />;
  }
};

export default RouteToLogin;
