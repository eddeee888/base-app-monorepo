import { mount } from 'enzyme';
import { Form, Formik } from 'formik';
import React from 'react';
import { FormClassSessionInput } from '../../types';
import SessionBlock from './SessionBlock';
import SessionBlocksContainer, {
  SessionBlockContainerProps
} from './SessionBlocksContainer';

const defaultProps: SessionBlockContainerProps = {
  values: {
    sessions: []
  },
  errors: {} as any,
  touched: {} as any
};

const mountWithProps = (props: any) =>
  mount(
    <Formik<FormClassSessionInput>
      initialValues={props.values}
      onSubmit={() => jest.fn()}
    >
      {() => (
        <Form>
          <SessionBlocksContainer {...props} />
        </Form>
      )}
    </Formik>
  );

const createValuesWithSessions = (numberOfSessions: number) => ({
  sessions: [...Array(numberOfSessions)].map(() => ({
    day: 'mon',
    startTime: '01:00am',
    endTime: '01:30am',
    capacity: 30
  }))
});

const numberOfSessionsToTest = [0, 1, 3];

describe('<SessionBlocksContainer />', () => {
  numberOfSessionsToTest.forEach(numberOfSessions => {
    it(`should render ${numberOfSessions} SessionBlock if theres's ${numberOfSessions} session`, () => {
      const wrapper = mountWithProps({
        ...defaultProps,
        values: createValuesWithSessions(numberOfSessions)
      });
      expect(wrapper.find(SessionBlock)).toHaveLength(numberOfSessions);
    });
  });

  it('should render Fab button to add more sessions', () => {
    const wrapper = mountWithProps(defaultProps);
    expect(
      wrapper
        .find('button')
        .filterWhere(button => button.prop('title') === 'Add session')
    ).toHaveLength(1);
  });
});
