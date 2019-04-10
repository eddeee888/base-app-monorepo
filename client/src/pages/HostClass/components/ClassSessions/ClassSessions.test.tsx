import { mount } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { emptySession } from '../../constants';
import Navigation from '../Navigation';
import ClassSessions from './ClassSessions';

const props = {
  initialValues: { sessions: [] },
  goNext: jest.fn(),
  goPrevious: jest.fn()
};

describe('<ClassSessions />', () => {
  it('should render correctly', () => {
    const wrapper = mount(<ClassSessions {...props} />);

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find(Formik)).toHaveLength(1);
    expect(wrapper.find(Formik).prop('onSubmit')).toBeTruthy();
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(Navigation).prop('goPrevious')).toBeTruthy();

    const submitFn = wrapper.find(Formik).prop('onSubmit');
    (submitFn as any)();
    expect(props.goNext).toHaveBeenCalledTimes(1);

    const goPreviousFn = wrapper.find(Navigation).prop('goPrevious');
    (goPreviousFn as any)();
    expect(props.goPrevious).toHaveBeenCalledTimes(1);
    expect(props.goPrevious).toHaveBeenCalledWith({ sessions: [emptySession] });

    const gobackButton = wrapper
      .find('button')
      .filterWhere(
        button =>
          button.prop('type') === 'button' && button.text() === 'Previous'
      );
    const submitButton = wrapper
      .find('button')
      .filterWhere(
        button => button.prop('type') === 'submit' && button.text() === 'Next'
      );

    expect(gobackButton).toHaveLength(1);
    expect(submitButton).toHaveLength(1);
  });
});
