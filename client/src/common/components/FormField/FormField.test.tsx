import { mount } from 'enzyme';
import { Form, Formik, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import FormField from './FormField';

interface Input {
  field1: '';
}

interface TestCase {
  errors: FormikErrors<Input>;
  touched: FormikTouched<Input>;
  isError: boolean;
}

describe('<FormField />', () => {
  const mockInput: Input = {
    field1: ''
  };

  const mountWithFormik = (formField: any) => {
    return mount(
      <Formik<Input> initialValues={mockInput} onSubmit={() => jest.fn()}>
        {() => <Form>{formField}</Form>}
      </Formik>
    );
  };

  const testCases: TestCase[] = [
    {
      errors: { field1: 'Field 1 is required' },
      touched: { field1: false },
      isError: false
    },
    {
      errors: { field1: 'Field 1 is required' },
      touched: { field1: true },
      isError: true
    },
    {
      errors: { field1: undefined },
      touched: { field1: false },
      isError: false
    },
    {
      errors: { field1: undefined },
      touched: { field1: true },
      isError: false
    }
  ];

  const children = jest.fn();

  afterEach(() => {
    jest.resetAllMocks();
  });

  testCases.forEach(({ errors, touched, isError }) => {
    it('should show no FormError if not touched', () => {
      const wrapper = mountWithFormik(
        <FormField
          name="field1"
          errors={errors}
          touched={touched}
          children={children}
        />
      );

      if (isError) {
        expect(wrapper.text()).toMatch(/Field 1 is required/);
        expect(children).toHaveBeenCalledTimes(1);
        expect(children.mock.calls[0][0].field.error).toBe(true);
      } else {
        expect(wrapper.text()).not.toMatch(/Field 1 is required/);
        expect(children).toHaveBeenCalledTimes(1);
        expect(children.mock.calls[0][0].field.error).toBe(false);
      }
    });
  });
});
