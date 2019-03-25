import { formOrder } from '../constants';
import linkgenHostClass from '../helper/linkgenHostClass';
import { HostClassFormPart } from '../types';
import useHostClassParams from './useHostClassParams';

type UseHostClassNavFn = () => {
  next: string | undefined;
  previous: string | undefined;
};

// TOTEST
const useHostClassNav: UseHostClassNavFn = () => {
  let nextForm: HostClassFormPart | undefined;
  let previousForm: HostClassFormPart | undefined;

  const params = useHostClassParams();

  if (params.formPart) {
    const currentFormIndex = formOrder.indexOf(params.formPart);
    nextForm = formOrder[currentFormIndex + 1]
      ? formOrder[currentFormIndex + 1]
      : undefined;

    previousForm = formOrder[currentFormIndex - 1]
      ? formOrder[currentFormIndex - 1]
      : undefined;
  }

  return {
    next: linkgenHostClass(nextForm, params.classId),
    previous: linkgenHostClass(previousForm, params.classId)
  };
};

export default useHostClassNav;
