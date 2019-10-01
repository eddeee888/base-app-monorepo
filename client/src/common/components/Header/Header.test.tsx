import React from 'react';
import { StaticRouter } from 'react-router';
import Header from './Header';
import { ViewerProvider } from '../ViewerContext';
import { render } from '@testing-library/react';
import { assertTextLink } from 'test/utils/react-testing-library/assertTextLink';

describe('<Header />', () => {
  it('should render with no viewer', () => {
    const { container } = render(
      <StaticRouter context={{}}>
        <ViewerProvider>
          <Header />
        </ViewerProvider>
      </StaticRouter>
    );
    assertTextLink(container, {
      text: 'Host a class',
      href: '/host-a-class'
    });

    assertTextLink(container, {
      text: 'Sign up',
      href: '/signup'
    });

    assertTextLink(container, {
      text: 'Log in',
      href: '/login'
    });
  });

  it('should render with viewer', () => {
    const { container } = render(
      <StaticRouter context={{}}>
        <ViewerProvider
          value={{ viewer: { id: 'abcdef' }, setViewerValue: jest.fn() }}
        >
          <Header />
        </ViewerProvider>
      </StaticRouter>
    );
    assertTextLink(container, {
      text: 'Host a class',
      href: '/host-a-class'
    });

    assertTextLink(container, {
      text: 'Account',
      href: '/me'
    });

    assertTextLink(container, {
      text: 'Log out',
      href: '/logout'
    });
  });
});
