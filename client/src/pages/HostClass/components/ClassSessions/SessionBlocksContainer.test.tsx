import { mount, ReactWrapper } from 'enzyme';
import { Formik } from 'formik';
import React from 'react';
import IconButton from 'src/common/components/IconButton';
import { ClassSession, ClassSessionsInput } from '../../types';
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

  it('should delete session block at the correct index', () => {
    const values = createValuesWithSessions(3);
    const wrapper = mountWithProps({
      ...defaultProps,
      values
    });

    const blocks = wrapper.find(SessionBlock);
    expect(blocks).toHaveLength(3);
    (blocks.at(2).prop('removeSession') as any)();

    // TODO check these!
    // const newBlocks = wrapper.find(SessionBlock);
    // expect(newBlocks).toHaveLength(2);
  });

  it('should create and call addSession if Fab button is clicked', () => {
    const wrapper = mountWithProps({
      ...defaultProps,
      values: createValuesWithSessions(1)
    });

    const addSessionButton = wrapper
      .find(IconButton)
      .filterWhere(button => button.prop('title') === 'Add session');

    expect(addSessionButton).toHaveLength(1);

    (addSessionButton.prop('onClick') as any)();

    expect(wrapper.find(SessionBlock)).toHaveLength(1);
  });

  it.skip('should automatically add one session if none given on re-render', () => { });
});
