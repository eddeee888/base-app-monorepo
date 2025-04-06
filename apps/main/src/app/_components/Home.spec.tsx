import { Home } from './Home';
import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { HomeDocument } from './Home.generated';

describe('Homepage', () => {
  it('should render blank state correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: HomeDocument,
            },
            result: {
              data: {
                users: {
                  __typename: 'UsersResultOk',
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

    expect(await screen.findByText('No user found!')).toBeInTheDocument();
  });

  it('should render multiple users correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: HomeDocument,
            },
            result: {
              data: {
                users: {
                  __typename: 'UsersResultOk',
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

    expect(await screen.findByText('1 - User One')).toBeInTheDocument();
    expect(await screen.findByText('2 - User Two')).toBeInTheDocument();
  });

  it('should render error state correctly', async () => {
    render(
      <MockedProvider
        mocks={[
          {
            request: {
              query: HomeDocument,
            },
            result: {
              data: {
                users: {
                  __typename: 'ResultError',
                  error: 'FORBIDDEN_ERROR',
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
              query: HomeDocument,
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
