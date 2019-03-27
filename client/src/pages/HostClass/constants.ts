import {
  ClassContactInput,
  ClassDetailsInput,
  HostClassFormPart
} from './types';

export const formOrder: HostClassFormPart[] = [
  'details',
  'sessions',
  'summary'
];
export const defaultFormPart = formOrder[0];
export const initialValues = {
  details: {
    name: '',
    category: '',
    description: ''
  } as ClassDetailsInput,
  contact: {
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    contactNumber: ''
  } as ClassContactInput
};
