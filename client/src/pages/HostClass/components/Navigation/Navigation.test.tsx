import { mount } from 'enzyme';
import React from 'react';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  const goPrevious = jest.fn();

  const testCases = [
    {
      data: { goPrevious: undefined },
      expected: {
        numberOfPreviousButton: 0,
        nextButtonText: 'Next'
      }
    },
    {
      data: { goPrevious },
      expected: {
        numberOfPreviousButton: 1,
        nextButtonText: 'Next'
      }
    },
    {
      data: { goPrevious },
      expected: {
        numberOfPreviousButton: 1,
        nextButtonText: 'Next'
      }
    }
  ];

  testCases.forEach(
    ({
      data: { goPrevious: goPreviousFn },
      expected: { numberOfPreviousButton, nextButtonText }
    }) => {
      afterEach(() => {
        jest.resetAllMocks();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it(`if previous is ${!!goPreviousFn}, previous button is ${
        numberOfPreviousButton > 0 ? 'shown' : 'hidden'
      } and submit button text is ${nextButtonText}`, () => {
        const wrapper = mount(<Navigation goPrevious={goPreviousFn} />);
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
