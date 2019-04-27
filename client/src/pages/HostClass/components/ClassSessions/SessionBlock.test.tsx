import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { FormClassSessionInput } from '../../types';
import SessionBlock from './SessionBlock';

const findElementWithName = (
  wrapper: ReactWrapper,
  element: string,
  fieldNameRegex: any
): ReactWrapper => {
  return wrapper.find(element).filterWhere(e => {
    const name = e.prop('name');
    if (!name) {
      return false;
    }
    return !!name.match(fieldNameRegex);
  });
};

describe('<SessionBlock />', () => {
  const props = {
    index: 0,
    duplicateSession: jest.fn(),
    removeSession: jest.fn(),
    errors: {},
    touched: {}
  };

  const mockInput: FormClassSessionInput = { sessions: [] };

  it('should render fields and action buttons', () => {
    const wrapper = mount(
      <Formik<FormClassSessionInput>
        initialValues={mockInput}
        onSubmit={() => jest.fn()}
      >
        {() => <SessionBlock {...props} />}
      </Formik>
    );

    const deleteButton = wrapper
      .find('button')
      .filterWhere(button => button.prop('title') === 'Delete session');
    const deleteButtonOnClick = deleteButton.prop('onClick');
    const duplicateButton = wrapper
      .find('button')
      .filterWhere(button => button.prop('title') === 'Duplicate session');
    const duplicateButtonOnClcik = duplicateButton.prop('onClick');

    expect(wrapper.text()).toMatch(/Session #1/);
    expect(findElementWithName(wrapper, 'select', /day/)).toHaveLength(1);
    expect(findElementWithName(wrapper, 'select', /startTime/)).toHaveLength(1);
    expect(findElementWithName(wrapper, 'select', /endTime/)).toHaveLength(1);
    expect(findElementWithName(wrapper, 'input', /capacity/)).toHaveLength(1);
    expect(deleteButton).toHaveLength(1);
    expect(deleteButtonOnClick).toBeTruthy();
    expect(duplicateButton).toHaveLength(1);
    expect(duplicateButtonOnClcik).toBeTruthy();

    (deleteButtonOnClick as any)();
    expect(props.removeSession).toHaveBeenCalledTimes(1);

    (duplicateButtonOnClcik as any)();
    expect(props.duplicateSession).toHaveBeenCalledTimes(1);
  });
});
