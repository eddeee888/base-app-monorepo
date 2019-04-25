import Spinner from 'common/components/Spinner';
import { mount } from 'enzyme';
import { Formik } from 'formik';
// @ts-ignore
import useHostClassNav from 'pages/HostClass/hooks/useHostClassNav';
import React from 'react';
import { StaticRouter } from 'react-router';
import Navigation from '../Navigation';
import ClassDetailsForm, { ClassDetailsFormProps } from './ClassDetailsForm';

jest.mock('pages/HostClass/hooks/useHostClassNav', () => ({
  __esModule: true,
  default: () => ({
    next: '/link-to-next'
  })
}));

describe('<ClassDetailsForm />', () => {
  const props: ClassDetailsFormProps = {
    categoryResult: {
      error: undefined,
      loading: false,
      data: {
        classCategories: [
          { id: '100', name: 'Cat. one' },
          { id: '200', name: 'Cat. two' }
        ]
      }
    } as any,
    initialValues: {
      name: '',
      category: '',
      description: ''
    },
    goNext: jest.fn()
  };

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should render form if no error and not loading', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <ClassDetailsForm {...props} />
      </StaticRouter>
    );

    expect(wrapper.find('form')).toHaveLength(1);
    expect(wrapper.find(`input[name='name']`)).toHaveLength(1);
    expect(wrapper.find(`select[name='category']`)).toHaveLength(1);
    expect(wrapper.find('option')).toHaveLength(3);
    expect(
      wrapper
        .find('option')
        .filterWhere(
          option =>
            option.text() === 'Cat. one' && option.prop('value') === '100'
        )
    ).toHaveLength(1);
    expect(
      wrapper
        .find('option')
        .filterWhere(
          option =>
            option.text() === 'Cat. two' && option.prop('value') === '200'
        )
    ).toHaveLength(1);
    expect(wrapper.find(Navigation)).toHaveLength(1);
    expect(wrapper.find(Spinner)).toHaveLength(0);
    expect(wrapper.text()).not.toMatch(
      /Unexpected error occurred. Please try again later./
    );
    expect(
      wrapper.find('button').filterWhere(button => button.text() === 'Previous')
    ).toHaveLength(0);
    expect(
      wrapper.find('button').filterWhere(button => button.text() === 'Next')
    ).toHaveLength(1);
  });

  it('should render error text if has error', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <ClassDetailsForm
          {...props}
          categoryResult={{
            ...props.categoryResult,
            error: new Error('Error!') as any
          }}
        />
      </StaticRouter>
    );

    expect(wrapper.text()).toMatch(
      /Unexpected error occurred. Please try again later./
    );
    expect(wrapper.find(Spinner)).toHaveLength(0);
  });

  it('should render loading spinner if categories are being loaded', () => {
    const wrapper = mount(
      <StaticRouter context={{}}>
        <ClassDetailsForm
          {...props}
          categoryResult={{
            ...props.categoryResult,
            loading: true
          }}
        />
      </StaticRouter>
    );

    expect(wrapper.find(Spinner)).toHaveLength(1);
    expect(wrapper.text()).not.toMatch(
      /Unexpected error occurred. Please try again later./
    );
  });

  it('when form submits, should call goNext function', () => {
    const formValues = {
      name: 'nameValue',
      category: 'categoryValue',
      description: 'descriptionValue'
    };

    const wrapper = mount(
      <StaticRouter context={{}}>
        <ClassDetailsForm {...props} />
      </StaticRouter>
    );

    const handleSubmit = wrapper.find(Formik).prop('onSubmit');

    handleSubmit(formValues, {} as any);

    expect(props.goNext).toHaveBeenCalledTimes(1);
    expect(props.goNext).toHaveBeenCalledWith(formValues, {});
  });
});
