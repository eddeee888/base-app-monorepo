export type HostClassFormPart = 'details' | 'contact' | 'sessions' | 'summary';
export interface HostClassParams {
  classId?: string;
  formPart?: HostClassFormPart;
}
export interface ClassDetailsInput {
  name: string;
  category: string;
  description: string;
}

export interface ClassContactInput {
  streetAddress: string;
  city: string;
  postcode: string;
  country: string;
  contactNumber: string;
}

export interface HostClassState {
  details: ClassDetailsInput;
  contact: ClassContactInput;
}

export type SetFormPartValues<I> = (values: I) => void;
