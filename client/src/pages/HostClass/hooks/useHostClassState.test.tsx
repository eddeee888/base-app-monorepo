import HookWrapper from 'common/helpers/tests/HookWrapper';
import { mount } from 'enzyme';
import React from 'react';
import useHostClassState from './useHostClassState';

describe('useHostClassState()', () => {
  it.skip('should test state and functions once hook support is in', () => {
    mount(<HookWrapper hook={() => useHostClassState()} />);
  });
});
