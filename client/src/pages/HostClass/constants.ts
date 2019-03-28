import { HostClassFormPart, HostClassState } from './types';

export const formOrder: HostClassFormPart[] = [
  'details',
  'sessions',
  'summary'
];
export const defaultFormPart = formOrder[0];

export const initialValues: HostClassState = {
  details: {
    name: '',
    category: '',
    description: ''
  },
  contact: {
    streetAddress: '',
    city: '',
    postcode: '',
    country: '',
    contactNumber: ''
  }
};
