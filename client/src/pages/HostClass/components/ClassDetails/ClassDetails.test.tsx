import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import ClassCategoriesQuery from './ClassCategoriesQuery';
import ClassDetailsForm from './ClassDetaillsForm';
import ClassDetails from './ClassDetails';

describe('ClassDetails()', () => {
  const props = {
    setValues: jest.fn()
  };

  it('should render <ClassCategoriesQuery /> and <ClassDetailsForm />', () => {
    const wrapper = mount(
      <MockedProvider>
        <ClassDetails {...props} />
      </MockedProvider>
    );

    expect(wrapper.find(ClassCategoriesQuery)).toHaveLength(1);
    expect(wrapper.find(ClassDetailsForm)).toHaveLength(1);
    expect(wrapper.find(ClassDetailsForm).prop('setValues')).toBe(
      props.setValues
    );
  });
});
