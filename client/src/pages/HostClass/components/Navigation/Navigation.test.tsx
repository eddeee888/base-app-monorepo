import { mount } from 'enzyme';
import React from 'react';
import Navigation from './Navigation';

describe('<Navigation />', () => {
  const goPrevious = jest.fn();
  const goNext = jest.fn();

  const testCasePrevious = [
    {
      data: { goPrevious: undefined },
      expected: {
        numberOfPreviousButton: 0
      }
    },
    {
      data: { goPrevious },
      expected: {
        numberOfPreviousButton: 1
      }
    }
  ];

  const testCasesNext = [
    {
      data: {},
      expected: {
        nextButtonText: 'Next',
        nextButtonDisabled: false
      }
    },
    {
      data: {
        goNext,
        goNextText: 'Customised submit text',
        goNextIsDisabled: true
      },
      expected: {
        nextButtonText: 'Customised submit text',
        nextButtonDisabled: true
      }
    }
  ];

  testCasePrevious.forEach(({ data, expected: { numberOfPreviousButton } }) => {
    afterEach(() => {
      jest.resetAllMocks();
    });

    afterAll(() => {
      jest.restoreAllMocks();
    });

    it(`Previous button is ${!!data.goPrevious}, previous button is ${
      numberOfPreviousButton > 0 ? 'shown' : 'hidden'
    }`, () => {
      const wrapper = mount(<Navigation {...data} />);
      expect(
        wrapper
          .find('button')
          .filterWhere(button => button.text() === 'Previous')
      ).toHaveLength(numberOfPreviousButton);
    });
  });

  testCasesNext.forEach(
    ({ data, expected: { nextButtonText, nextButtonDisabled } }) => {
      afterEach(() => {
        jest.resetAllMocks();
      });

      afterAll(() => {
        jest.restoreAllMocks();
      });

      it(`Next button text is '${nextButtonText}',
        isDisabled: ${nextButtonDisabled},
        goNext: ${!!data.goNext}`, () => {
        const wrapper = mount(<Navigation {...data} />);
        const goNextButton = wrapper
          .find('button')
          .filterWhere(
            button =>
              button.prop('type') === 'submit' &&
              button.text() === nextButtonText &&
              button.prop('disabled') === nextButtonDisabled
          );
        expect(goNextButton).toHaveLength(1);

        if (data.goNext) {
          (goNextButton.prop('onClick') as any)();
          expect(data.goNext).toHaveBeenCalledTimes(1);
        }
      });
    }
  );
});
