import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DuplicateIcon from '@material-ui/icons/FileCopy';
import { mount } from 'enzyme';
import createIcon from './createIcon';
import React from 'react';

describe('createIcon()', () => {
  const testCases = [
    {
      icon: 'add',
      ExpectedComponent: AddIcon
    },
    {
      icon: 'delete',
      ExpectedComponent: DeleteIcon
    },
    {
      icon: 'duplicate',
      ExpectedComponent: DuplicateIcon
    }
  ];

  testCases.forEach(({ icon, ExpectedComponent }) => {
    it(`should create ${icon} correctly`, () => {
      const wrapper = mount(createIcon(icon as any));
      const wrapperActual = mount(<ExpectedComponent />);
      expect(wrapperActual.html()).toBe(wrapper.html());
    });
  });

  it('should pass props to the component', () => {
    const props = { fontSize: 'default' };
    const wrapper = mount(createIcon('add', { ...props } as any));
    expect(wrapper.props()).toEqual({ ...props });
  });
});
