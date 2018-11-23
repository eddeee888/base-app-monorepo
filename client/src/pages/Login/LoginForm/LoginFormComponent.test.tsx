import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { StaticRouter } from 'react-router';
import { Paths } from 'src/common/helpers/pathing';
import LoginFormComponent from './LoginFormComponent';

describe('<LoginFormComponent />', () => {
  const handleSubmit = jest.fn();
  const defaultProps = {
    handleSubmit,
    generalError: '',
    isSubmitting: false
  };

  const assertButton = (wrapper: ReactWrapper, isDisabled: boolean) => {
    expect(
      wrapper.find(`button[type='submit']`).filterWhere(button => {
        return button.prop('disabled') === isDisabled;
      })
    ).toHaveLength(1);
    expect(wrapper.find(`button[type='submit']`).text()).toBe('Log in');
  };

  it('should contain form, email, password, submit and link to /signup', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent {...defaultProps} />
      </StaticRouter>
    );

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find(`input[name='email']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='password']`)).toHaveLength(1);
    expect(wrapper.find(`a[href='${Paths.signup}']`)).toHaveLength(1);
    assertButton(wrapper, false);
  });

  it('should display generalError if passed in', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent
          {...defaultProps}
          generalError={'OMG! there has been some error!'}
        />
      </StaticRouter>
    );

    expect(wrapper.text()).toMatch(/OMG! there has been some error!/);
  });

  it('should disable button if isSubmitting', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent {...defaultProps} isSubmitting={true} />
      </StaticRouter>
    );

    assertButton(wrapper, true);
  });

  it('should pass handleSubmit to Formik', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent {...defaultProps} />
      </StaticRouter>
    );

    expect(wrapper.find(Formik).props().onSubmit).toBe(handleSubmit);
  });
});
