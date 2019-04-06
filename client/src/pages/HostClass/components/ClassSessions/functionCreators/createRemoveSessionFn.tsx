import { FieldArrayRenderProps } from 'formik';

type CreateRemoveSessionFn = (
  arrayHelpers: FieldArrayRenderProps,
  index: number
) => () => void;

const createRemoveSessionFn: CreateRemoveSessionFn = (
  arrayHelpers,
  index
) => () => arrayHelpers.remove(index);

export default createRemoveSessionFn;
