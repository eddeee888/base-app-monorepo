import Fab from '@material-ui/core/Fab';
import { mount } from 'enzyme';
import React from 'react';
import IconButtonFab from './IconButtonFab';

describe('<IconButtonFab />', () => {
  it('should render a fab button', () => {
    const wrapper = mount(<IconButtonFab icon="add" />);

    expect(wrapper.find(Fab)).toHaveLength(1);
  });
});
