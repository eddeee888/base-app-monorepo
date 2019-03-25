import { formOrder } from '../constants';
import linkgenHostClass from '../helper/linkgenHostClass';
import { HostClassFormPart } from '../types';
import useHostClassParams from './useHostClassParams';

type UseHostClassNavFn = () => {
  currentFormPart: HostClassFormPart | undefined;
  next: string | undefined;
  previous: string | undefined;
};

const useHostClassNav: UseHostClassNavFn = () => {
  let currentFormPart: HostClassFormPart | undefined;
  let nextFormPart: HostClassFormPart | undefined;
  let previousFormPart: HostClassFormPart | undefined;

  const params = useHostClassParams();

  if (params.formPart) {
    const currentFormIndex = formOrder.indexOf(params.formPart);
    nextFormPart = formOrder[currentFormIndex + 1]
      ? formOrder[currentFormIndex + 1]
      : undefined;
    previousFormPart = formOrder[currentFormIndex - 1]
      ? formOrder[currentFormIndex - 1]
      : undefined;
    currentFormPart = params.formPart;
  }

  return {
    currentFormPart,
    next: linkgenHostClass(nextFormPart, params.classId),
    previous: linkgenHostClass(previousFormPart, params.classId)
  };
};

export default useHostClassNav;
