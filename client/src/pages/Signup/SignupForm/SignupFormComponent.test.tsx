import { mount, shallow, ShallowWrapper } from 'enzyme';
import { Field } from 'formik';
import React from 'react';
import { StaticRouter } from 'react-router';
import Button from 'src/common/components/Button';
import FormError from 'src/common/components/FormError';
import Link from 'src/common/components/Link';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import SignupFormComponent from './SignupFormComponent';

describe('<SignupForm />', () => {
  const handleSubmit = jest.fn();
  let wrapper: ShallowWrapper;
  let fields: ShallowWrapper;
  let errorFields: ShallowWrapper;
  let submitButton: ShallowWrapper;
  let linkToLogin: ShallowWrapper;
  let emailField: ShallowWrapper;
  let emailErrorField: ShallowWrapper;
  let firstNameField: ShallowWrapper;
  let firstNameErrorField: ShallowWrapper;
  let lastNameField: ShallowWrapper;
  let lastNameErrorField: ShallowWrapper;
  let passwordField: ShallowWrapper;
  let passwordErrorField: ShallowWrapper;

  beforeEach(() => {
    wrapper = shallow(
      <SignupFormComponent
        handleSubmit={handleSubmit}
        loading={false}
        generalError={''}
      />
    );
    fields = wrapper.dive().find(Field);
    errorFields = wrapper.dive().find(FormError);
    submitButton = wrapper.dive().find(Button);
    linkToLogin = wrapper.dive().find(Link) as any;
    emailField = fields.at(0);
    emailErrorField = errorFields.at(0);
    firstNameField = fields.at(1);
    firstNameErrorField = errorFields.at(1);
    lastNameField = fields.at(2);
    lastNameErrorField = errorFields.at(2);
    passwordField = fields.at(3);
    passwordErrorField = errorFields.at(3);
  });

  it('should render correct structure', () => {
    expect(fields).toHaveLength(4);
    expect(emailField.prop('name')).toBe('email');
    expect(firstNameField.prop('name')).toBe('firstName');
    expect(lastNameField.prop('name')).toBe('lastName');
    expect(passwordField.prop('name')).toBe('password');

    expect(errorFields).toHaveLength(5);
    expect(emailErrorField.props()).toEqual({
      error: undefined,
      touched: undefined
    });
    expect(firstNameErrorField.props()).toEqual({
      error: undefined,
      touched: undefined
    });
    expect(lastNameErrorField.props()).toEqual({
      error: undefined,
      touched: undefined
    });
    expect(passwordErrorField.props()).toEqual({
      error: undefined,
      touched: undefined
    });

    expect(submitButton).toHaveLength(1);
    expect(submitButton.prop('type')).toBe('submit');

    expect(linkToLogin).toHaveLength(1);
    expect(linkToLogin.prop('to')).toBe(linkgen(Paths.login));
  });

  it('should call handleSubmit if Formik onSubmit is called', () => {
    const formikInstance = wrapper.dive().instance();
    // @ts-ignore:
    formikInstance.props.onSubmit();
    expect(handleSubmit).toHaveBeenCalledTimes(1);
  });

  it('should show a general error if is passed in', () => {
    const mounted = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent
          handleSubmit={handleSubmit}
          loading={false}
          generalError={`OMG there's an error!`}
        />
      </StaticRouter>
    );

    expect(mounted.text()).toMatch(/OMG there's an error!/);
  });

  it('should disable sign up button if loading is passed in', () => {
    const mounted = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent
          handleSubmit={handleSubmit}
          loading={true}
          generalError={''}
        />
      </StaticRouter>
    );

    expect(
      mounted.find(`button[type='submit']`).filterWhere(button => {
        return button.prop('disabled') === true;
      })
    ).toHaveLength(1);
  });
});
