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

export type UpdateState<I> = (values: I, validated: boolean) => void;
