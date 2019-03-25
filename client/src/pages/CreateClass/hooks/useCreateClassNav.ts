import { formOrder } from '../constants';
import linkgenCreateClass from '../helper/linkgenCreateClass';
import { CreateClassFormPart } from '../types';
import useCreateClassParams from './useCreateClassParams';

type UseCreateClassNavFn = () => {
  nextForm: string | undefined;
  previousForm: string | undefined;
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
    nextForm: linkgenCreateClass(nextForm, params.id),
    previousForm: linkgenCreateClass(previousForm, params.id)
  };
};

export default useCreateClassNav;
