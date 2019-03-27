export type HostClassFormPart = 'details' | 'sessions' | 'summary';
export interface HostClassParams {
  classId?: string;
  formPart?: HostClassFormPart;
}
