import { mount } from 'enzyme';
import React from 'react';
import HookWrapper from 'src/common/helpers/tests/HookWrapper';
import useFormError from './useFormError';

describe('useFormError()', () => {
  const testCases = [0, 1, 3];
  const children = jest.fn();

  beforeEach(() => {
    children.mockReturnValue('');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  testCases.forEach(numberOfErrors => {
    it(`should return an array with length ${numberOfErrors}`, () => {
      const wrapper = mount(
        <HookWrapper hook={() => useFormError(numberOfErrors)} />
      );
      const hookResult = wrapper.find('div').prop('hook');

      expect(hookResult).toHaveLength(numberOfErrors);
    });
  });

  it.skip('should update error at correct index if setError is called (waiting for hook support)', () => {});
});
