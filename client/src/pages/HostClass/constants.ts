import { ClassDetailsInput, HostClassFormPart } from './types';

export const formOrder: HostClassFormPart[] = [
  'details',
  'sessions',
  'summary'
];
export const defaultFormPart = formOrder[0];
export const classDetailsInitialValues: ClassDetailsInput = {
  name: '',
  category: '',
  description: ''
};
