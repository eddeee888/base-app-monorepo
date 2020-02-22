/* This file was automatically generated and should not be edited. */

    import React from 'react';
    import generateUrl from './generateUrl';
    import LinkNext, { LinkProps as NextJSLinkProps } from 'next/link';
    
    export interface LinkProps<P> extends Omit<NextJSLinkProps, 'href'> {
      params: P;
      children: React.ReactNode;
      urlQuery?: Record<string, string>;
    }
    
    function createNextJSLink<P = {}>(pattern: string) {
      return function NextJSLink({ params, children, urlQuery, ...props }: LinkProps<P>) {
        const to = generateUrl(pattern, params as any, urlQuery);
        return (
          <LinkNext href={to} {...props}>
            <a>{children}</a>
          </LinkNext>
        );
      };
    }
    
    export default createNextJSLink;
  