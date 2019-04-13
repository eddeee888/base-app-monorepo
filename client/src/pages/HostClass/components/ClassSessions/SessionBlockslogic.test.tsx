import { mount, ReactWrapper } from 'enzyme';
import React from 'react';
import SessionBlocksLogic, { LogicContainerProps } from './SessionBlocksLogic';

const defaultProps: LogicContainerProps = {
    values: {
        sessions: [
            { day: 'mon', startTime: '01:00am', endTime: '01:30am', capacity: 1 },
            { day: 'tue', startTime: '02:00am', endTime: '02:30am', capacity: 2 },
        ]
    },
    arrayHelpers: {
        push: jest.fn(),
        remove: jest.fn(),
        insert: jest.fn()
    } as any,
    children: jest.fn(),
};

const mountWrapper = (props: LogicContainerProps) => (
    mount(
        <SessionBlocksLogic {...props}>
            {({ addSession, removeSessionFns, duplicateSessionFns }) =>
                <>
                    {defaultProps.values.sessions.map((session, index) => (
                        <div key={index}>
                            <button onClick={removeSessionFns[index]}>remove {index}</button>
                            <button onClick={duplicateSessionFns[index]}>duplicate {index}</button>
                        </div>
                    ))}
                    <button onClick={addSession}>add</button>
                </>
            }
        </SessionBlocksLogic>
    )
);

const findButton = (wrapper: ReactWrapper, text: string): ReactWrapper => (
    wrapper.find('button').filterWhere(button => button.text() === text)
);

describe('<SessionBlocksLogic />', () => {
    it('should call function to push to array when addSession is called', () => {
        const wrapper = mountWrapper(defaultProps);
        const addButtonOnClick = findButton(wrapper, 'add').prop('onClick');

        (addButtonOnClick as any)();

        expect(defaultProps.arrayHelpers.push).toHaveBeenCalledTimes(1);
    });

    it('should call function to remove index of array when removeSession is called', () => {
        const wrapper = mountWrapper(defaultProps);

        const removeButtonOnClick1 = findButton(wrapper, 'remove 0').prop('onClick');
        (removeButtonOnClick1 as any)();
        expect(defaultProps.arrayHelpers.remove).toHaveBeenCalledTimes(1);
        expect(defaultProps.arrayHelpers.remove).toHaveBeenCalledWith(0);

        (defaultProps.arrayHelpers.remove as jest.Mock).mockReset();

        const removeButtonOnClick2 = findButton(wrapper, 'remove 1').prop('onClick');
        (removeButtonOnClick2 as any)();
        expect(defaultProps.arrayHelpers.remove).toHaveBeenCalledTimes(1);
        expect(defaultProps.arrayHelpers.remove).toHaveBeenCalledWith(1);
    });

    it('should call function to duplicate index of array when duplicateSession is called', () => {
        const wrapper = mountWrapper(defaultProps);

        const duplicateButtonOnClick1 = findButton(wrapper, 'duplicate 0').prop('onClick');
        (duplicateButtonOnClick1 as any)();
        expect(defaultProps.arrayHelpers.insert).toHaveBeenCalledTimes(1);
        expect(defaultProps.arrayHelpers.insert).toHaveBeenCalledWith(1, defaultProps.values.sessions[0]);

        (defaultProps.arrayHelpers.insert as jest.Mock).mockReset();

        const duplicateButtonOnClick2 = findButton(wrapper, 'duplicate 1').prop('onClick');
        (duplicateButtonOnClick2 as any)();
        expect(defaultProps.arrayHelpers.insert).toHaveBeenCalledTimes(1);
        expect(defaultProps.arrayHelpers.insert).toHaveBeenCalledWith(2, defaultProps.values.sessions[1]);
    });
});
