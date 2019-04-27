import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { FormClassContactInput } from '../../types';
import ClassContact, { ClassContactProps } from './ClassContact';

const props: ClassContactProps<FormClassContactInput> = {
  initialValues: {
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    contactNumber: '',
    state: '',
    streetUnit: ''
  },
  goNext: jest.fn(),
  goPrevious: jest.fn()
};

const getPreviousButton = (wrapper: ReactWrapper) => {
  return wrapper
    .find('button')
    .filterWhere(button => button.text() === 'Previous');
};

afterEach(() => {
  jest.resetAllMocks();
});

describe('<ClassContact />', () => {
  it('should render form correctly', () => {
    const wrapper = mount(<ClassContact {...props} />);

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find(`input[name='country']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='streetAddress']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='city']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='postcode']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='country']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='contactNumber']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='state']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='streetUnit']`)).toHaveLength(1);
    expect(getPreviousButton(wrapper)).toHaveLength(1);
    expect(
      wrapper.find('button').filterWhere(button => button.text() === 'Next')
    ).toHaveLength(1);
  });

  it('should goNext should be called if form is submitted', () => {
    const formValues: FormClassContactInput = {
      streetAddress: '120 ABC street',
      city: 'Melbest',
      postcode: '3010',
      country: 'Australia',
      contactNumber: '0400123123',
      state: 'VIC',
      streetUnit: '90'
    };
    const wrapper = mount(<ClassContact {...props} />);

    const onSubmit = wrapper.find(Formik).prop('onSubmit');

    onSubmit(formValues, {} as any);

    expect(props.goNext).toHaveBeenCalledTimes(1);
    expect(props.goNext).toHaveBeenCalledWith(formValues, {});
  });

  it('should call goPrevious() if previous button is clicked', () => {
    const wrapper = mount(<ClassContact {...props} />);
    const previousButtonOnClick = getPreviousButton(wrapper).prop('onClick');

    (previousButtonOnClick as any)();

    expect(props.goPrevious).toHaveBeenCalledTimes(1);
  });
});
