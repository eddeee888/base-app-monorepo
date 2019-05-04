import H2 from 'common/components/H2';
import Text from 'common/components/Text';
// @ts-ignore
import useParams from 'common/hooks/useParams';
import { mount } from 'enzyme';
import React from 'react';
import HostClassSuccess from './HostClassSuccess';

jest.mock('common/hooks/useParams', () => ({
  __esModule: true,
  default: jest.fn().mockReturnValueOnce({
    classId: 'hashedclassid'
  })
}));

describe('<HostClassSuccess />', () => {
  it('should show correct details', () => {
    const wrapper = mount(<HostClassSuccess />);

    expect(
      wrapper
        .find(H2)
        .filterWhere(
          h2 =>
            h2.prop('variant') === 'h4' &&
            h2.text() === 'Your class has been created!'
        )
    ).toHaveLength(1);

    expect(
      wrapper
        .find(Text)
        .filterWhere(
          text => text.text() === 'Learners can join your class by going here'
        )
    ).toHaveLength(1);

    expect(
      wrapper
        .find(Text)
        .filterWhere(
          text => text.text() === 'Learners can join your class by going here'
        )
    ).toHaveLength(1);

    expect(
      wrapper
        .find(Text)
        .filterWhere(
          text =>
            text.text() ===
            `Don't forget to share your class on social media! It's the easiest way to let your learners know about it!`
        )
    ).toHaveLength(1);

    expect(wrapper.find('a').prop('href')).toBe('/classes/hashedclassid');
  });
});
