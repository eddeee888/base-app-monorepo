import { mount } from 'enzyme';
import React from 'react';
import Paper from 'src/common/components/Paper';
import PaperContainer from './PaperContainer';

describe('<PaperContainer />', () => {
  it('should render correctly with a <Paper />', () => {
    const wrapper = mount(
      <PaperContainer size="small">
        <div />
      </PaperContainer>
    );
    expect(wrapper.find(Paper)).toHaveLength(1);
  });
});
