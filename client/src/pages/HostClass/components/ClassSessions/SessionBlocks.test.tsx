import { mount } from 'enzyme';
import { Form, Formik } from 'formik';
import React from 'react';
import { FormClassSessionInput } from '../../types';
import SessionBlock from './SessionBlock';
import SessionBlocks, { SessionBlocksProps } from './SessionBlocks';

const defaultProps: SessionBlocksProps = {
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
          <SessionBlocks {...props} />
        </Form>
      )}
    </Formik>
  );

describe('<SessionBlocks /> -> <SessionBlock />', () => {
  const numberOfSessionsToTest = [0, 1, 3];

  const createValuesWithSessions = (numberOfSessions: number) => ({
    sessions: [...Array(numberOfSessions)].map(() => ({
      day: 'mon',
      startTime: '01:00am',
      endTime: '01:30am',
      capacity: 30
    }))
  });

  numberOfSessionsToTest.forEach(numberOfSessions => {
    it.skip(`should render ${numberOfSessions} SessionBlock if theres's ${numberOfSessions} session
    (waiting for https://github.com/airbnb/enzyme/issues/2025)`, () => {
      const wrapper = mountWithProps({
        ...defaultProps,
        values: createValuesWithSessions(numberOfSessions)
      });
      expect(wrapper.find(SessionBlock)).toHaveLength(numberOfSessions);
    });
  });
});

describe('<SessionBlocks /> -> Add session Fab', () => {
  it('should render Fab button to add more sessions', () => {
    const wrapper = mountWithProps(defaultProps);
    expect(
      wrapper
        .find('button')
        .filterWhere(button => button.prop('title') === 'Add session')
    ).toHaveLength(1);
  });
});
