import { mount } from 'enzyme';
import React from 'react';
import HookWrapper from 'src/common/helpers/tests/HookWrapper';
import useHostClassState from './useHostClassState';

describe('useHostClassState()', () => {
  it.skip('should call', () => {
    mount(<HookWrapper hook={() => useHostClassState()} />);
  });
});
