import { ClassSessionDay } from '__generated__/globalTypes';
import { SelectOption } from 'common/components/Select/Select';
import * as Yup from 'yup';
import {
  ClassSession,
  FormClassContactInput,
  FormClassDetailsInput,
  FormClassSessionInput,
  HostClassFormPart,
  HostClassState,
  SessionTime
} from './types';

export const formOrder: HostClassFormPart[] = [
  'details',
  'contact',
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
    contactNumber: '',
    state: '',
    streetUnit: ''
  },
  sessions: {
    sessions: []
  }
};

export const emptySession: ClassSession = {
  day: '',
  startTime: '',
  endTime: '',
  capacity: 0
};

const dayArray: Array<keyof typeof ClassSessionDay> = [
  'MONDAY',
  'TUESDAY',
  'WEDNESDAY',
  'THURSDAY',
  'FRIDAY',
  'SATURDAY',
  'SUNDAY'
];

type DayMap = { [key in ClassSessionDay]: string };
export const dayMap: DayMap = {
  MONDAY: 'Monday',
  TUESDAY: 'Tuesday',
  WEDNESDAY: 'Wednesday',
  THURSDAY: 'Thursday',
  FRIDAY: 'Friday',
  SATURDAY: 'Saturday',
  SUNDAY: 'Sunday'
};

const dayOptions: Array<
  SelectOption<keyof typeof ClassSessionDay, string>
> = dayArray.map(value => ({
  value,
  label: dayMap[value]
}));
dayOptions.unshift({ value: '', label: '' });
export { dayOptions };

export const sessionTimes: SessionTime[] = [
  '12:30am',
  '01:00am',
  '01:30am',
  '02:00am',
  '02:30am',
  '03:00am',
  '03:30am',
  '04:00am',
  '04:30am',
  '05:00am',
  '05:30am',
  '06:00am',
  '06:30am',
  '07:00am',
  '07:30am',
  '08:00am',
  '08:30am',
  '09:00am',
  '09:30am',
  '10:00am',
  '10:30am',
  '11:00am',
  '11:30am',
  '12:00pm',
  '12:30pm',
  '01:00pm',
  '01:30pm',
  '02:00pm',
  '02:30pm',
  '03:00pm',
  '03:30pm',
  '04:00pm',
  '04:30pm',
  '05:00pm',
  '05:30pm',
  '06:00pm',
  '06:30pm',
  '07:00pm',
  '07:30pm',
  '08:00pm',
  '08:30pm',
  '09:00pm',
  '09:30pm',
  '10:00pm',
  '10:30pm',
  '11:00pm',
  '11:30pm'
];

const sessionTimeOptions: Array<
  SelectOption<SessionTime, SessionTime>
> = sessionTimes.map(sessionTime => ({
  value: sessionTime,
  label: sessionTime
}));
sessionTimeOptions.unshift({ value: '', label: '' });
export { sessionTimeOptions };

export const validationSchemas = {
  details: Yup.object().shape<FormClassDetailsInput>({
    name: Yup.string().required('Class name is required'),
    category: Yup.string().required('Class category is required'),
    description: Yup.string()
  }),
  contact: Yup.object().shape<FormClassContactInput>({
    streetAddress: Yup.string().required('Street address is required'),
    city: Yup.string().required('City is required'),
    postcode: Yup.string(),
    country: Yup.string().required('Country is required'),
    contactNumber: Yup.string().required('Contact number is required'),
    streetUnit: Yup.string(),
    state: Yup.string().required('State is required')
  }),
  sessions: Yup.object().shape<FormClassSessionInput>({
    sessions: Yup.array()
      .of(
        Yup.object().shape<ClassSession>({
          day: Yup.mixed().oneOf(dayArray, 'Day is required'),
          startTime: Yup.mixed().oneOf(sessionTimes, 'Start time is required'),
          endTime: Yup.mixed().oneOf(sessionTimes, 'End time is required'),
          capacity: Yup.number()
            .required('Capacity is required')
            .typeError('Must be a valid number')
            .min(1, 'Must be at least 1')
        })
      )
      .min(1, 'Must be at least 1')
  })
};
