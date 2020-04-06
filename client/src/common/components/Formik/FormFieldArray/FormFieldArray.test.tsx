import { Form, Formik, FormikErrors, FormikTouched } from "formik";
import React from "react";
import FormFieldArray from "./FormFieldArray";
import { render } from "@testing-library/react";
import { assertTextExists } from "test/utils/react-testing-library";

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
      { property1: "Error 1", property2: "Error 2" },
      { property1: undefined, property2: undefined },
    ],
  },
  touched: {
    field1: [
      { property1: true, property2: false },
      { property1: true, property2: false },
    ],
  },
  isError: false,
};

const mockInput: Input = {
  field1: [
    { property1: "", property2: "" },
    { property1: "", property2: "" },
  ],
};

const mountWithFormik = (formField: any) => {
  return render(
    <Formik<Input> initialValues={mockInput} onSubmit={() => jest.fn()}>
      {() => <Form>{formField}</Form>}
    </Formik>
  );
};

afterEach(() => {
  jest.resetAllMocks();
});

describe("<FormFieldArray />", () => {
  it("should should show error correctly", () => {
    const { errors, touched } = testCase;

    const { container } = mountWithFormik(
      <>
        <FormFieldArray<Input, Element> name="field1" index={0} property="property1" errors={errors} touched={touched}>
          {() => <>Children 1</>}
        </FormFieldArray>
        <FormFieldArray<Input, Element> name="field1" index={0} property="property2" errors={errors} touched={touched}>
          {() => <>Children 2</>}
        </FormFieldArray>
        <FormFieldArray<Input, Element> name="field1" index={1} property="property1" errors={errors} touched={touched}>
          {() => <>Children 3</>}
        </FormFieldArray>
        <FormFieldArray<Input, Element> name="field1" index={1} property="property2" errors={errors} touched={touched}>
          {() => <>Children 4</>}
        </FormFieldArray>
      </>
    );

    assertTextExists(container, /Children 1/);
    assertTextExists(container, /Error 1/);
    assertTextExists(container, /Children 2/);
    assertTextExists(container, /Children 3/);
    assertTextExists(container, /Children 4/);
  });
});
