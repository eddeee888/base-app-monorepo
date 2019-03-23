import { mount, ReactWrapper } from 'enzyme';
import { Field, Formik } from 'formik';
import React from 'react';
import { StaticRouter } from 'react-router';
import FormError from 'src/common/components/FormError';
import Link from 'src/common/components/Link';
import { linkgen, Paths } from 'src/common/helpers/pathing';
import SignupFormComponent from './SignupFormComponent';

function assertFieldName(
  reactWrapper: ReactWrapper,
  fieldName: string,
  count: number
) {
  expect(
    reactWrapper
      .find(Field)
      .filterWhere(field => field.prop('name') === fieldName)
  ).toHaveLength(count);
}

describe('<SignupFormComponent />', () => {
  const props = {
    handleSubmit: jest.fn(),
    loading: false,
    generalFormError: {
      error: '',
      display: false
    }
  };

  it('should render correct structure', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent {...props} />
      </StaticRouter>
    );

    expect(wrapper.find(Formik)).toHaveLength(1);
    expect(wrapper.find(Formik).prop('onSubmit')).toBe(props.handleSubmit);

    expect(wrapper.find(Field)).toHaveLength(4);
    assertFieldName(wrapper, 'email', 1);
    assertFieldName(wrapper, 'firstName', 1);
    assertFieldName(wrapper, 'lastName', 1);
    assertFieldName(wrapper, 'password', 1);

    expect(wrapper.find(FormError)).toHaveLength(5);
    wrapper.find(FormError).forEach(formError => {
      expect(formError.props()).toEqual({
        error: undefined,
        display: undefined
      });
    });

    expect(wrapper.find('submit')).toHaveLength(1);

    expect(wrapper.find(Link)).toHaveLength(1);
    expect(wrapper.find(Link).prop('to')).toBe(linkgen(Paths.login));
  });

  it('should show a general error if is passed in', () => {
    const mounted = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent
          {...props}
          generalFormError={{ error: `OMG there's an error!`, display: true }}
        />
      </StaticRouter>
    );

    expect(mounted.text()).toMatch(/OMG there's an error!/);
  });

  it('should disable sign up button if loading is passed in', () => {
    const mounted = mount(
      <StaticRouter context={{}}>
        <SignupFormComponent {...props} loading={true} />
      </StaticRouter>
    );

    expect(
      mounted.find(`button[type='submit']`).filterWhere(button => {
        return button.prop('disabled') === true;
      })
    ).toHaveLength(1);
  });
});
