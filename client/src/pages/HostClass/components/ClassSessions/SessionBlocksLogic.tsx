import { FieldArrayRenderProps } from 'formik';
import { useCallback, useEffect } from 'react';
import React from 'react';
import { emptySession } from '../../constants';
import { ClassSession, ClassSessionsInput } from '../../types';

type AddSessionFn = () => void;
type CreateAddSessionFn = (arrayHelpers: FieldArrayRenderProps) => AddSessionFn;
const createAddSessionFn: CreateAddSessionFn = arrayHelpers => () =>
  arrayHelpers.push(emptySession);

type DuplicateSessionFn = () => void;
type CreateDuplicateSessionFn = (
  arrayHelpers: FieldArrayRenderProps,
  session: ClassSession,
  newIndex: number
) => DuplicateSessionFn;
const createDuplicateSessionFn: CreateDuplicateSessionFn = (
  arrayHelpers,
  session,
  newIndex
) => () => arrayHelpers.insert(newIndex, { ...session });

type RemoveSessionFn = () => void;
type CreateRemoveSessionFn = (
  arrayHelpers: FieldArrayRenderProps,
  index: number
) => RemoveSessionFn;

const createRemoveSessionFn: CreateRemoveSessionFn = (
  arrayHelpers,
  index
) => () => arrayHelpers.remove(index);

export interface LogicContainerProps {
  values: ClassSessionsInput;
  arrayHelpers: FieldArrayRenderProps;
  children: (props: LogicContainerChildrenProps) => React.ReactNode;
}

interface LogicContainerChildrenProps {
  addSession: AddSessionFn;
  removeSessionFns: RemoveSessionFn[];
  duplicateSessionFns: DuplicateSessionFn[];
}

const SessionBlocksLogic = ({
  values,
  arrayHelpers,
  children
}: LogicContainerProps) => {
  const addSession = useCallback(createAddSessionFn(arrayHelpers), [
    arrayHelpers
  ]);

  const removeSessionFns: RemoveSessionFn[] = [];
  const duplicateSessionFns: DuplicateSessionFn[] = [];
  values.sessions.forEach((session, index) => {
    removeSessionFns.push(createRemoveSessionFn(arrayHelpers, index));
    duplicateSessionFns.push(
      createDuplicateSessionFn(arrayHelpers, session, index + 1)
    );
  });

  useEffect(
    () => {
      if (values.sessions.length <= 0) {
        addSession();
      }
    },
    [values.sessions.length, addSession]
  );

  return (
    <>
      {children({
        addSession,
        removeSessionFns,
        duplicateSessionFns
      })}
    </>
  );
};

export default SessionBlocksLogic;
