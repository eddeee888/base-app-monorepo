import { SelectOption } from 'src/common/components/Select/Select';
import {
  DayOfTheWeek,
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
    unit: ''
  },
  sessions: {
    sessions: [
      {
        day: 'mon',
        startTime: '12:00am',
        endTime: '01:00am',
        capacity: 0
      },
      {
        day: 'tue',
        startTime: '02:00am',
        endTime: '03:00am',
        capacity: 100
      }
    ]
  }
};

export const dayValues: Array<keyof typeof DayOfTheWeek> = [
  'mon',
  'tue',
  'wed',
  'thu',
  'fri',
  'sat',
  'sun'
];

const dayOptions: Array<
  SelectOption<keyof typeof DayOfTheWeek, DayOfTheWeek>
> = dayValues.map(value => ({
  value,
  label: DayOfTheWeek[value]
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
