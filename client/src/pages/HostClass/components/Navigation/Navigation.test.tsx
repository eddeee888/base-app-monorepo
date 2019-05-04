import Button from 'common/components/Button';
import { mount } from 'enzyme';
import React from 'react';
import Navigation from './Navigation';

describe('<Navigation /> -> previous button', () => {
  const goPrevious = jest.fn();

  const testCasePrevious = [
    {
      description: 'show show pervious button',
      data: { goPrevious: undefined },
      expected: {
        numberOfPreviousButton: 0
      }
    },
    {
      description: 'should show previous button',
      data: { goPrevious },
      expected: {
        numberOfPreviousButton: 1
      }
    }
  ];

  afterEach(() => {
    jest.resetAllMocks();
  });

  testCasePrevious.forEach(
    ({ description, data, expected: { numberOfPreviousButton } }) => {
      it(description, () => {
        const wrapper = mount(<Navigation {...data} />);
        expect(
          wrapper
            .find('button')
            .filterWhere(button => button.text() === 'Previous')
        ).toHaveLength(numberOfPreviousButton);
      });
    }
  );
});

describe('<Navigation /> -> next button', () => {
  const goNext = jest.fn();

  const testCasesNext = [
    {
      description: 'should show default value',
      data: {},
      expected: {
        nextButtonText: 'Next',
        nextButtonDisabled: false
      }
    },
    {
      description: 'should show disabled custom text',
      data: {
        goNext,
        goNextText: 'Customised submit text',
        goNextIsDisabled: true
      },
      expected: {
        nextButtonText: 'Customised submit text',
        nextButtonDisabled: true
      }
    },
    {
      description: 'should show spinner',
      data: {
        goNext,
        goNextText: 'Customised submit text',
        goNextIsDisabled: true,
        goNextIsLoading: true
      },
      expected: {
        nextButtonText: 'Customised submit text',
        nextButtonDisabled: true,
        goNextIsLoading: true
      }
    }
  ];

  afterEach(() => {
    jest.resetAllMocks();
  });

  testCasesNext.forEach(
    ({
      description,
      data,
      expected: { nextButtonText, nextButtonDisabled, goNextIsLoading }
    }) => {
      it(description, () => {
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

        // this loading prop does not exist natively on a button so we should check it here
        expect(wrapper.find(Button).prop('loading')).toBe(goNextIsLoading);

        if (data.goNext && !nextButtonDisabled) {
          (goNextButton.prop('onClick') as any)();
          expect(data.goNext).toHaveBeenCalledTimes(1);
        } else {
          expect(goNextButton.prop('onClick')).toBeFalsy();
        }
      });
    }
  );
});
