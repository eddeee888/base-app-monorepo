import { mount } from 'enzyme';
import React from 'react';
import { MockedProvider } from 'react-apollo/test-utils';
import { ClassDetailsInput } from '../../types';
import ClassCategoriesQuery from '../ClassCategoriesQuery';
import ClassDetails, { ClassDetailsProps } from './ClassDetails';
import ClassDetailsForm from './ClassDetailsForm';

describe('ClassDetails()', () => {
  const props: ClassDetailsProps<ClassDetailsInput> = {
    initialValues: {
      name: '',
      category: '',
      description: ''
    },
    goNext: jest.fn()
  };

  it('should render <ClassCategoriesQuery /> and <ClassDetailsForm />', () => {
    const wrapper = mount(
      <MockedProvider>
        <ClassDetails {...props} />
      </MockedProvider>
    );

    expect(wrapper.find(ClassCategoriesQuery)).toHaveLength(1);
    expect(wrapper.find(ClassDetailsForm)).toHaveLength(1);
    expect(wrapper.find(ClassDetailsForm).prop('goNext')).toBe(props.goNext);
    expect(wrapper.find(ClassDetailsForm).prop('initialValues')).toBe(
      props.initialValues
    );
  });
});
