import React from 'react';
import { generatePath } from 'react-router';
import Link, { LinkProps } from 'src/common/components/Link';

interface RouteLinkProps<P> extends Omit<LinkProps, 'href'> {
  params: P;
  children: React.ReactNode;
}

interface NextJsRoute<P> {
  pattern: string;
  generate: (inputParams: P) => string;
  Link: (props: RouteLinkProps<P>) => any;
}

function createNextJsRoute<P = {}>(pattern: string): NextJsRoute<P> {
  function NextJsLink({ params, children, ...props }: RouteLinkProps<P>): any {
    const to = generatePath(pattern, params as any);
    return (
      <Link href={to} {...props}>
        {children}
      </Link>
    );
  }

  return {
    pattern,
    generate: params => generatePath(pattern, params as any),
    Link: NextJsLink
  };
}

export default createNextJsRoute;
