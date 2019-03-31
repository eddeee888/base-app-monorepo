import { mount } from 'enzyme';
import { Form, Formik, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import FormFieldArray from './FormFieldArray';

interface Element {
  property1: string;
  property2: string;
}

interface Input {
  field1: Element[];
}

interface TestCase {
  errors: FormikErrors<Input>;
  touched: FormikTouched<Input>;
  isError: boolean;
}

const testCase: TestCase = {
  errors: {
    field1: [
      { property1: 'Error 1', property2: 'Error 2' },
      { property1: undefined, property2: undefined }
    ]
  },
  touched: {
    field1: [
      { property1: true, property2: false },
      { property1: true, property2: false }
    ]
  },
  isError: false
};

const children1 = jest.fn();
const children2 = jest.fn();
const children3 = jest.fn();
const children4 = jest.fn();

const mockInput: Input = {
  field1: [{ property1: '', property2: '' }, { property1: '', property2: '' }]
};

const mountWithFormik = (formField: any) => {
  return mount(
    <Formik<Input> initialValues={mockInput} onSubmit={() => jest.fn()}>
      {() => <Form>{formField}</Form>}
    </Formik>
  );
};

afterEach(() => {
  jest.resetAllMocks();
});

describe('<FormFieldArray />', () => {
  it('should should show error correctly', () => {
    const { errors, touched } = testCase;

    const wrapper = mountWithFormik(
      <>
        <FormFieldArray<Input, Element>
          name="field1"
          index={0}
          property="property1"
          errors={errors}
          touched={touched}
          children={children1}
        />
        <FormFieldArray<Input, Element>
          name="field1"
          index={0}
          property="property2"
          errors={errors}
          touched={touched}
          children={children2}
        />
        <FormFieldArray<Input, Element>
          name="field1"
          index={1}
          property="property1"
          errors={errors}
          touched={touched}
          children={children3}
        />
        <FormFieldArray<Input, Element>
          name="field1"
          index={1}
          property="property2"
          errors={errors}
          touched={touched}
          children={children4}
        />
      </>
    );

    expect(children1).toHaveBeenCalledTimes(1);
    expect(children1.mock.calls[0][0].field.error).toBe(true);
    expect(wrapper.text()).toMatch(/Error 1/);

    expect(children2).toHaveBeenCalledTimes(1);
    expect(children2.mock.calls[0][0].field.error).toBe(false);

    expect(children3).toHaveBeenCalledTimes(1);
    expect(children3.mock.calls[0][0].field.error).toBe(false);

    expect(children4).toHaveBeenCalledTimes(1);
    expect(children4.mock.calls[0][0].field.error).toBe(false);
  });
});
