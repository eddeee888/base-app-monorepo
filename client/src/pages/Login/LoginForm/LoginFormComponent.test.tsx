import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { StaticRouter } from 'react-router';
import { Paths } from 'src/common/helpers/pathing';
import LoginFormComponent from './LoginFormComponent';

describe('<LoginFormComponent />', () => {
  const onSubmit = jest.fn();
  const defaultProps = {
    onSubmit,
    generalFormError: {
      error: '',
      display: false
    },
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
          generalFormError={{
            error: 'OMG! there has been some error!',
            display: true
          }}
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
