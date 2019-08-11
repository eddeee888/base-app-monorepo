import { Form, Formik, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import FormField from './FormField';
import { render } from '@testing-library/react';
import { assertTextExists } from 'test/utils/react-testing-library';

interface Input {
  field1: string;
}

interface TestCase {
  description: string;
  errors: FormikErrors<Input>;
  touched: FormikTouched<Input>;
  isError: boolean;
}

describe('<FormField />', () => {
  const mockInput: Input = {
    field1: ''
  };

  const mountWithFormik = (formField: any) => {
    return render(
      <Formik<Input> initialValues={mockInput} onSubmit={() => jest.fn()}>
        {() => <Form>{formField}</Form>}
      </Formik>
    );
  };

  const testCases: TestCase[] = [
    {
      description: 'should not show errors if has error but not touched',
      errors: { field1: 'Field 1 is required' },
      touched: { field1: false },
      isError: false
    },
    {
      description: 'should show errors if has error and touched',
      errors: { field1: 'Field 1 is required' },
      touched: { field1: true },
      isError: true
    },
    {
      description: 'should show errors if no error and not touched',
      errors: { field1: undefined },
      touched: { field1: false },
      isError: false
    },
    {
      description: 'should not show errors if no error and not touched',
      errors: { field1: undefined },
      touched: { field1: true },
      isError: false
    }
  ];

  afterEach(() => {
    jest.resetAllMocks();
  });

  testCases.forEach(({ description, errors, touched, isError }) => {
    it(description, () => {
      const { container } = mountWithFormik(
        <FormField name="field1" errors={errors} touched={touched}>
          {() => <div>Content</div>}
        </FormField>
      );

      if (isError) {
        assertTextExists(container, /Field 1 is required/);
        assertTextExists(container, /Content/);
      } else {
        expect(() =>
          assertTextExists(container, /Field 1 is required/)
        ).toThrow();
        assertTextExists(container, /Content/);
      }
    });
  });
});
