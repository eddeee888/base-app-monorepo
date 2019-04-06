import Fab from '@material-ui/core/Fab';
import IconButtonMui from '@material-ui/core/IconButton';
import { mount } from 'enzyme';
import React from 'react';
import IconButton from './IconButton';

describe('<IconButton />', () => {
  it('should render a fab button', () => {
    const wrapper = mount(<IconButton buttonType="fab" icon="add" />);

    expect(wrapper.find(Fab)).toHaveLength(1);
  });

  it('should render an icon button', () => {
    const wrapper = mount(<IconButton buttonType="button" icon="add" />);

    expect(wrapper.find(IconButtonMui)).toHaveLength(1);
  });
});
