import { FieldArrayRenderProps } from 'formik';
import { useCallback, useEffect } from 'react';
import React from 'react';
import { emptySession } from '../../constants';
import { ClassSession, FormClassSessionInput } from '../../types';

type AddSessionFn = () => void;
type CreateAddSessionFn = (push: FieldArrayRenderProps['push']) => AddSessionFn;
const createAddSessionFn: CreateAddSessionFn = push => () => push(emptySession);

type DuplicateSessionFn = () => void;
type CreateDuplicateSessionFn = (
  insert: FieldArrayRenderProps['insert'],
  session: ClassSession,
  newIndex: number
) => DuplicateSessionFn;
const createDuplicateSessionFn: CreateDuplicateSessionFn = (
  insert,
  session,
  newIndex
) => () => insert(newIndex, { ...session });

type RemoveSessionFn = () => void;
type CreateRemoveSessionFn = (
  remove: FieldArrayRenderProps['remove'],
  index: number
) => RemoveSessionFn;

const createRemoveSessionFn: CreateRemoveSessionFn = (remove, index) => () =>
  remove(index);

export interface SessionBlocksLogicProps {
  values: FormClassSessionInput;
  arrayHelpers: FieldArrayRenderProps;
  children: (props: ChildrenProps) => React.ReactNode;
}

interface ChildrenProps {
  addSession: AddSessionFn;
  removeSessionFns: RemoveSessionFn[];
  duplicateSessionFns: DuplicateSessionFn[];
}

const SessionBlocksLogic = ({
  values,
  arrayHelpers,
  children
}: SessionBlocksLogicProps) => {
  const addSession = useCallback(createAddSessionFn(arrayHelpers.push), [
    arrayHelpers.push
  ]);

  const removeSessionFns: RemoveSessionFn[] = [];
  const duplicateSessionFns: DuplicateSessionFn[] = [];
  values.sessions.forEach((session, index) => {
    removeSessionFns.push(createRemoveSessionFn(arrayHelpers.remove, index));
    duplicateSessionFns.push(
      createDuplicateSessionFn(arrayHelpers.insert, session, index + 1)
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
