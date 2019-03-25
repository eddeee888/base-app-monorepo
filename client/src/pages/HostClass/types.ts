export type HostClassFormPart = 'details' | 'time' | 'summary';
export interface HostClassParams {
  classId?: string;
  formPart?: HostClassFormPart;
}
