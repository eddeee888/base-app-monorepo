import { SelectOption } from 'src/common/components/Select/Select';
import { DayOfTheWeek, HostClassFormPart, HostClassState } from './types';

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
        capacity: 0
      }
    ]
  }
};

export const dayOptions: Array<
  SelectOption<keyof typeof DayOfTheWeek, DayOfTheWeek>
> = [
  { value: '', label: '' },
  {
    value: 'mon',
    label: DayOfTheWeek.mon
  },
  {
    value: 'tue',
    label: DayOfTheWeek.tue
  },
  {
    value: 'wed',
    label: DayOfTheWeek.wed
  },
  {
    value: 'thu',
    label: DayOfTheWeek.thu
  },
  {
    value: 'fri',
    label: DayOfTheWeek.fri
  },
  {
    value: 'sat',
    label: DayOfTheWeek.sat
  },
  {
    value: 'sun',
    label: DayOfTheWeek.sun
  }
];
