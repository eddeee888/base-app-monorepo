import { renderHook, act } from '@testing-library/react-hooks';
import { MemoryRouter, Route } from 'react-router';
import createRoute from './createRoute';
import React from 'react';

describe('createRoute() -> path', () => {
  it('should return the same patern', () => {
    const link = createRoute('/users/:classId/:subform(details|contact)');

    expect('/users/:classId/:subform(details|contact)').toBe(link.pattern);
  });
});

describe('createRoute() -> generate params', () => {
  it('should work without typing', () => {
    const link = createRoute('/users/:classId/:subform(details|contact)');

    expect(link.generate({ classId: '100', subform: 'details' })).toBe(
      '/users/100/details'
    );
  });

  it('should work with typing correctly', () => {
    const link = createRoute<{
      classId: string;
      subform: 'details' | 'contact';
    }>('/users/:classId/:subform(details|contact)');

    expect(link.generate({ classId: '100', subform: 'details' })).toBe(
      '/users/100/details'
    );
  });

  it('should not generate optional param if not passed in', () => {
    const link = createRoute('/users/:userId?');
    expect(link.generate({})).toBe('/users');
  });

  it('should not generate middle optional param if not passed in', () => {
    const link = createRoute<{ userId?: string; classId: string }>(
      '/users/:userId?/:classId'
    );
    expect(link.generate({ classId: '999' })).toBe('/users/999');
  });
});

describe('createRoute() -> generate url query', () => {
  it('should generate redirect query correctly without param', () => {
    const link = createRoute<{ userId?: string }>('/users/:userId?');
    expect(link.generate({}, { redirect: 'abcd' })).toBe(
      '/users?redirect=abcd'
    );
  });

  it('should generate redirect query correctly with param', () => {
    const link = createRoute<{ userId: string }>('/users/:userId');
    expect(link.generate({ userId: '999' }, { redirect: 'abcd' })).toBe(
      '/users/999?redirect=abcd'
    );
  });
});

describe('createRoute() -> useParams', () => {
  it('should get mandatory param correctly without generics', () => {
    const link = createRoute('/:flavour');

    const { result } = renderHook(() => link.useParams(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/bubblegum']}>
          <Route path="/:flavour" render={() => <>{children}</>} />
        </MemoryRouter>
      )
    });

    expect(result.current).toEqual({ flavour: 'bubblegum' });
  });

  it('should get mandatory param correctly with generics', () => {
    interface RouteParam {
      flavour: string;
    }
    const link = createRoute<RouteParam>('/:flavour');

    const { result } = renderHook(() => link.useParams(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/bubblegum']}>
          <Route path="/:flavour" render={() => <>{children}</>} />
        </MemoryRouter>
      )
    });

    expect(result.current).toEqual({ flavour: 'bubblegum' });
  });

  it('should get optional param correctly if not passed in', () => {
    interface RouteParam {
      flavour: string;
      colour?: string;
    }
    const link = createRoute<RouteParam>('/:flavour/:colour?');

    const { result } = renderHook(() => link.useParams(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/bubblegum']}>
          <Route path="/:flavour/:colour?" render={() => <>{children}</>} />
        </MemoryRouter>
      )
    });

    expect(result.current).toEqual({ flavour: 'bubblegum' });
  });

  it('should get optional param correctly if passed in', () => {
    interface RouteParam {
      flavour: string;
      colour?: string;
    }
    const link = createRoute<RouteParam>('/:flavour/:colour?');

    const { result } = renderHook(() => link.useParams(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/bubblegum/red']}>
          <Route path="/:flavour/:colour?" render={() => <>{children}</>} />
        </MemoryRouter>
      )
    });

    expect(result.current).toEqual({ flavour: 'bubblegum', colour: 'red' });
  });

  it('should throw an error if it is used in a route with different path from the pattern', () => {
    const link = createRoute('/:flavour/:colour?');

    const { result } = renderHook(() => link.useParams(), {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={['/lord-of-the-rings']}>
          <Route path="/:movie" render={() => <>{children}</>} />
        </MemoryRouter>
      )
    });

    expect(() => result.current).toThrowError(
      `You are trying to use useParams for "/:flavour/:colour?" in "/:movie". Make sure you are using the right route link object!`
    );
  });
});

describe('createRoute() -> useRedirect', () => {
  it.only('should redirect to correct route', () => {
    interface RouteParam {
      flavour: string;
      colour?: string;
    }
    const link = createRoute<RouteParam>('/:flavour/:colour?');
    let expected = false;

    const { result } = renderHook(
      () =>
        link.useRedirect({
          flavour: 'banana',
          colour: 'blue'
        }),
      {
        wrapper: ({ children }) => (
          <MemoryRouter initialEntries={['/bubblegum/red']}>
            <Route
              exact
              path="/banana/blue"
              render={() => <>{(expected = true)}</>}
            />
            <Route path="/:flavour/:colour?" render={() => <>{children}</>} />
          </MemoryRouter>
        )
      }
    );

    act(() => result.current());
    expect(expected).toBe(true);
  });
});
