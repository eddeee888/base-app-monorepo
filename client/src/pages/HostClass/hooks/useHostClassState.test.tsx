import HookWrapper from 'common/helpers/tests/HookWrapper';
import { mount } from 'enzyme';
import React from 'react';
import { initialValues } from '../constants';
import useHostClassState from './useHostClassState';

describe('useHostClassState()', () => {
  it.skip('should test state and functions once hook support is in', () => {
    const hook = mount(<HookWrapper hook={() => useHostClassState()} />).prop(
      'hook'
    );

    expect(hook.value).toBe(initialValues);
  });
});
