import { Home } from './Home';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { ErrorCodes } from '@bam/shared-config';
import * as Operations from './Home.graphql';

describe('Homepage', () => {
  it('should render no users correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: Operations.Home,
            },
            result: {
              data: {
                users: {
                  __typename: 'UsersResult',
                  result: [],
                },
              },
            },
          },
        ]}
      >
        <Home />
      </MockedProvider>
    );

    expect(await screen.findByText('Welcome!')).toBeInTheDocument();
    expect(await screen.findByText('No user found!')).toBeInTheDocument();
  });

  it('should render multiple users correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: Operations.Home,
            },
            result: {
              data: {
                users: {
                  __typename: 'UsersResult',
                  result: [
                    { id: '1', displayName: 'User One' },
                    { id: '2', displayName: 'User Two' },
                  ],
                },
              },
            },
          },
        ]}
      >
        <Home />
      </MockedProvider>
    );

    expect(await screen.findByText('Welcome!')).toBeInTheDocument();
    expect(await screen.findByText('1 - User One')).toBeInTheDocument();
    expect(await screen.findByText('2 - User Two')).toBeInTheDocument();
  });

  it('should render UsersError correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: Operations.Home,
            },
            result: {
              data: {
                users: {
                  __typename: 'UsersError',
                  error: ErrorCodes.FORBIDDEN_ERROR,
                },
              },
            },
          },
        ]}
      >
        <Home />
      </MockedProvider>
    );

    expect(await screen.findByText('Insufficient permission to make the request.')).toBeInTheDocument();
  });

  it('should render Graphql Error correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: Operations.Home,
            },
            error: new Error('An error occurred'),
          },
        ]}
      >
        <Home />
      </MockedProvider>
    );

    expect(await screen.findByText('Error!')).toBeInTheDocument();
  });
});
