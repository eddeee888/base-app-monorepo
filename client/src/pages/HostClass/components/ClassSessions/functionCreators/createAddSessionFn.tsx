import { FieldArrayRenderProps } from 'formik';
import { emptySession } from 'src/pages/HostClass/constants';

type CreateAddSessionFn = (arrayHelpers: FieldArrayRenderProps) => () => void;

const createAddSessionFn: CreateAddSessionFn = arrayHelpers => () => arrayHelpers.push(emptySession);

export default createAddSessionFn;
