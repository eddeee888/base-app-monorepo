import Button from 'common/components/Button';
import { Paths } from 'common/helpers/pathing';
import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { StaticRouter } from 'react-router';
import LoginFormComponent from './LoginFormComponent';

describe('<LoginFormComponent />', () => {
  const onSubmit = jest.fn();
  const defaultProps = {
    onSubmit,
    generalFormError: '',
    isSubmitting: false
  };

  const assertButton = (wrapper: ReactWrapper, isDisabled: boolean) => {
    expect(
      wrapper
        .find(Button)
        .filterWhere(
          button =>
            button.prop('type') === 'submit' &&
            button.prop('disabled') === isDisabled &&
            button.prop('showSpinner') === isDisabled &&
            button.text() === 'Log in'
        )
    ).toHaveLength(1);
  };
  const assertCommonElements = (wrapper: ReactWrapper) => {
    expect(wrapper.find(Formik).props().onSubmit).toBe(onSubmit);
    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find(`input[name='email']`)).toHaveLength(1);
    expect(wrapper.find(`input[name='password']`)).toHaveLength(1);
  };

  it('should contain form, email, password, submit and link to /signup', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent {...defaultProps} />
      </StaticRouter>
    );
    assertCommonElements(wrapper);
    assertButton(wrapper, false);
    expect(wrapper.find(`a[href='${Paths.signup}']`)).toHaveLength(1);
  });

  it('should have link to /signup with redirect query if it exists in url', () => {
    const wrapper = mount(
      <StaticRouter
        location={{ search: '?redirect=/redirect-to-this-path' }}
        context={{}}
      >
        <LoginFormComponent {...defaultProps} />
      </StaticRouter>
    );
    assertCommonElements(wrapper);
    assertButton(wrapper, false);
    expect(
      wrapper.find(`a[href='${Paths.signup}?redirect=/redirect-to-this-path']`)
    ).toHaveLength(1);
  });

  it('should display generalError if passed in', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent
          {...defaultProps}
          generalFormError="OMG! there has been some error!"
        />
      </StaticRouter>
    );
    assertCommonElements(wrapper);
    assertButton(wrapper, false);
    expect(wrapper.text()).toMatch(/OMG! there has been some error!/);
  });

  it('should disable button if isSubmitting', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <LoginFormComponent {...defaultProps} isSubmitting={true} />
      </StaticRouter>
    );

    assertCommonElements(wrapper);
    assertButton(wrapper, true);
  });
});
