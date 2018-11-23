import { mount } from 'enzyme';
import React from 'react';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import Link from './Link';

describe('<Link />', () => {
  it('should generate and pass "to" prop to RouterLink', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Link to="/login" themeColor="secondary">
          Linkage
        </Link>
      </MemoryRouter>
    );

    expect(wrapper.find(RouterLink)).toHaveLength(1);
    expect(wrapper.find(RouterLink).props().to).toEqual('/login');
    expect(wrapper.find(RouterLink).props().className).toBeTruthy();
    expect(wrapper.html()).toMatch(/Linkage/);
  });
});
