import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DuplicateIcon from '@material-ui/icons/FileCopy';
import { mount } from 'enzyme';
import createIcon from './createIcon';

describe('createIcon()', () => {
  const testCases = [
    {
      icon: 'add',
      expectedComponent: AddIcon
    },
    {
      icon: 'delete',
      expectedComponent: DeleteIcon
    },
    {
      icon: 'duplicate',
      expectedComponent: DuplicateIcon
    }
  ];

  testCases.forEach(({ icon, expectedComponent }) => {
    it(`should create ${icon} correctly`, () => {
      const wrapper = mount(createIcon(icon as any));
      expect(wrapper.find(expectedComponent)).toHaveLength(1);
    });
  });

  it('should pass props to the component', () => {
    const props = { fontSize: 'default' };
    const wrapper = mount(createIcon('add', { ...props } as any));
    expect(wrapper.props()).toEqual({ ...props });
  });
});
