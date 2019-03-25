import { formOrder } from '../constants';
import linkgenCreateClass from '../helper/linkgenCreateClass';
import { CreateClassFormPart } from '../types';
import useCreateClassParams from './useCreateClassParams';

type UseCreateClassNavFn = () => {
  next: string | undefined;
  previous: string | undefined;
};

// TOTEST
const useCreateClassNav: UseCreateClassNavFn = () => {
  let nextForm: CreateClassFormPart | undefined;
  let previousForm: CreateClassFormPart | undefined;

  const params = useCreateClassParams();

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
    next: linkgenCreateClass(nextForm, params.classId),
    previous: linkgenCreateClass(previousForm, params.classId)
  };
};

export default useCreateClassNav;
