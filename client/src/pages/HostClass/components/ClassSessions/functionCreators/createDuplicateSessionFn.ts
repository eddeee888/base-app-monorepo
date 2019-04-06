import { FieldArrayRenderProps } from 'formik';
import { ClassSession } from 'src/pages/HostClass/types';

type CreateDuplicateSessionFn = (
  arrayHelpers: FieldArrayRenderProps,
  session: ClassSession,
  newIndex: number
) => () => void;

const createDuplicateSessionFn: CreateDuplicateSessionFn = (
  arrayHelpers,
  session,
  newIndex
) => () => arrayHelpers.insert(newIndex, { ...session });

export default createDuplicateSessionFn;
