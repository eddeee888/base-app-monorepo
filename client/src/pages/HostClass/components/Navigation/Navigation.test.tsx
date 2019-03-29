import { mount } from 'enzyme';
import React from 'react';
import { StaticRouter } from 'react-router';
import useHostClassNav from 'src/pages/HostClass/hooks/useHostClassNav';
import Navigation from './Navigation';

jest.mock('src/pages/HostClass/hooks/useHostClassNav');

describe('<Navigation />', () => {
  const testCases = [
    {
      data: { previous: undefined, next: '/link-to-next' },
      expected: {
        numberOfPreviousButton: 0,
        nextButtonText: 'Next'
      }
    },
    {
      data: { previous: '/link-to-previous', next: '/link-to-next' },
      expected: {
        numberOfPreviousButton: 1,
        nextButtonText: 'Next'
      }
    },
    {
      data: { previous: '/link-to-previous', next: undefined },
      expected: {
        numberOfPreviousButton: 1,
        nextButtonText: 'Submit'
      }
    }
  ];

  testCases.forEach(
    ({
      data: { previous, next },
      expected: { numberOfPreviousButton, nextButtonText }
    }) => {
      afterEach(() => {
        jest.resetAllMocks();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it(`if previous is ${previous}, previous button is ${
        numberOfPreviousButton > 0 ? 'shown' : 'hidden'
      } and if next is ${next}, submit button text is ${nextButtonText}`, () => {
        (useHostClassNav as jest.Mock).mockReturnValue({
          previous,
          next
        });

        const wrapper = mount(
          <StaticRouter context={{}}>
            <Navigation />
          </StaticRouter>
        );
        expect(
          wrapper
            .find('button')
            .filterWhere(button => button.text() === 'Previous')
        ).toHaveLength(numberOfPreviousButton);

        expect(
          wrapper
            .find('button')
            .filterWhere(button => button.text() === nextButtonText)
        ).toHaveLength(1);
      });
    }
  );
});
