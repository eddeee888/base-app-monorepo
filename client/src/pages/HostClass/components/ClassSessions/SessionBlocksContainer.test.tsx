import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import { ClassSession, ClassSessionsInput } from '../../types';

import SessionBlock from './SessionBlock';
import SessionBlocksContainer, {
  SessionBlockContainerProps
} from './SessionBlocksContainer';

const defaultProps: SessionBlockContainerProps = {
  values: {
    sessions: []
  },
  arrayHelpers: {
    push: jest.fn()
  } as any,
  errors: {} as any,
  touched: {} as any
};

function mountWithProps(props: any): ReactWrapper {
  return mount(
    <Formik<ClassSessionsInput>
      initialValues={props.values}
      onSubmit={() => jest.fn()}
    >
      {() => <SessionBlocksContainer {...props} />}
    </Formik>
  );
}

function createValuesWithSessions(
  numberOfSessions: number
): { sessions: ClassSession[] } {
  return {
    sessions: [...Array(numberOfSessions)].map(() => ({
      day: 'mon',
      startTime: '01:00am',
      endTime: '01:30am',
      capacity: 30
    }))
  };
}

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

  it.skip('should create multiple removeSession functions and pass into each session block', () => {});

  it.skip('should create and call addSession if Fab button is clicked', () => {});

  it.skip('should automatically add one session if none given on re-render', () => {});
});
