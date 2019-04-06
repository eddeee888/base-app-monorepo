import { mount } from 'enzyme';
import React from 'react';
import Section from './Section';

describe('<Section />', () => {
  it('should render correctly with a <Section />', () => {
    const wrapper = mount(
      <Section size="small">
        <div>CHILDREN CONTENT</div>
      </Section>
    );
    expect(wrapper.find('section')).toHaveLength(1);
    expect(wrapper.text()).toMatch(/CHILDREN CONTENT/);
  });
});
