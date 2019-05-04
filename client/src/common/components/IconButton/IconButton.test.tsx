import IconButtonMui from '@material-ui/core/IconButton';
import { mount } from 'enzyme';
import React from 'react';
import IconButton from './IconButton';

describe('<IconButton />', () => {
  it('should render an icon button', () => {
    const wrapper = mount(<IconButton icon="add" />);

    expect(wrapper.find(IconButtonMui)).toHaveLength(1);
  });
});
