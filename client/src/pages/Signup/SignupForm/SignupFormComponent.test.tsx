import Button from '@material-ui/core/Button';
import { mount, ReactWrapper } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';
import { StaticRouter } from 'react-router';
import FormError from 'src/common/components/FormError';
import Link from 'src/common/components/Link';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import SignupFormComponent from './SignupFormComponent';

const props = {
  onSubmit: jest.fn(),
  loading: false,
  generalFormError: {
    error: '',
    display: false
  }
};

const assertFieldName = (
  wrapper: ReactWrapper,
  fieldName: string,
  count: number
) => {
  expect(
    wrapper.find(Field).filterWhere(field => field.prop('name') === fieldName)
  ).toHaveLength(count);
};

const assertCommonElements = (wrapper: ReactWrapper) => {
  expect(wrapper.find(Formik)).toHaveLength(1);
  expect(wrapper.find(Formik).prop('onSubmit')).toBe(props.onSubmit);

  expect(wrapper.find(Field)).toHaveLength(4);
  assertFieldName(wrapper, 'email', 1);
  assertFieldName(wrapper, 'firstName', 1);
  assertFieldName(wrapper, 'lastName', 1);
  assertFieldName(wrapper, 'password', 1);

  expect(wrapper.find(FormError)).toHaveLength(5);

  expect(
    wrapper.find(Button).filterWhere(button => button.prop('type') === 'submit')
  ).toHaveLength(1);

  expect(wrapper.find(Link)).toHaveLength(1);
};

describe('<SignupFormComponent />', () => {
  it('should render correct structure and a link to /login', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent {...props} />
      </StaticRouter>
    );
    assertCommonElements(wrapper);
    expect(wrapper.find(Link).prop('to')).toBe(linkgen(Paths.login));
  });

  it('should render correct structure and a link to /login with redirect query that matches the one from url', () => {
    const wrapper = mount(
      <StaticRouter
        location={{ search: '?redirect=/redirect-to-this-path' }}
        context={{}}
      >
        <SignupFormComponent {...props} />
      </StaticRouter>
    );
    assertCommonElements(wrapper);
    expect(wrapper.find(Link).prop('to')).toBe(
      linkgen(Paths.login) + '?redirect=/redirect-to-this-path'
    );
  });

  it('should show a general error if is passed in', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent
          {...props}
          generalFormError={{ error: `OMG there's an error!`, display: true }}
        />
      </StaticRouter>
    );
    assertCommonElements(wrapper);
    expect(wrapper.text()).toMatch(/OMG there's an error!/);
  });

  it('should disable sign up button if loading is passed in', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent {...props} loading={true} />
      </StaticRouter>
    );

    expect(
      wrapper.find(`button[type='submit']`).filterWhere(button => {
        return button.prop('disabled') === true;
      })
    ).toHaveLength(1);
  });
});
