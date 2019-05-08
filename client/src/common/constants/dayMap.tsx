import { ClassSessionDay } from '__generated__/globalTypes';

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
