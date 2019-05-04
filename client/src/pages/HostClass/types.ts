import { ClassSessionDay } from '__generated__/globalTypes';

export type HostClassFormPart =
  | 'details'
  | 'contact'
  | 'sessions'
  | 'summary'
  | 'success';
export interface HostClassParams {
  classId?: string;
  formPart?: HostClassFormPart;
}
export interface FormClassDetailsInput {
  name: string;
  category: string;
  description: string;
}

export interface FormClassContactInput {
  streetUnit: string;
  streetAddress: string;
  city: string;
  postcode: string;
  country: string;
  contactNumber: string;
  state: string;
}

export interface ClassSession {
  day: keyof typeof ClassSessionDay | '';
  startTime: SessionTime | '';
  endTime: SessionTime | '';
  capacity: number;
}

export interface FormClassSessionInput {
  sessions: ClassSession[];
}

export interface HostClassState {
  details: FormClassDetailsInput;
  contact: FormClassContactInput;
  sessions: FormClassSessionInput;
}

export type SetFormValues<I> = (values: I) => void;

export type SessionTime =
  | '12:00am'
  | '12:30am'
  | '01:00am'
  | '01:30am'
  | '02:00am'
  | '02:30am'
  | '03:00am'
  | '03:30am'
  | '04:00am'
  | '04:30am'
  | '05:00am'
  | '05:30am'
  | '06:00am'
  | '06:30am'
  | '07:00am'
  | '07:30am'
  | '08:00am'
  | '08:30am'
  | '09:00am'
  | '09:30am'
  | '10:00am'
  | '10:30am'
  | '11:00am'
  | '11:30am'
  | '12:00pm'
  | '12:30pm'
  | '01:00pm'
  | '01:30pm'
  | '02:00pm'
  | '02:30pm'
  | '03:00pm'
  | '03:30pm'
  | '04:00pm'
  | '04:30pm'
  | '05:00pm'
  | '05:30pm'
  | '06:00pm'
  | '06:30pm'
  | '07:00pm'
  | '07:30pm'
  | '08:00pm'
  | '08:30pm'
  | '09:00pm'
  | '09:30pm'
  | '10:00pm'
  | '10:30pm'
  | '11:00pm'
  | '11:30pm';
