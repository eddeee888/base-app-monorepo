export type HostClassFormPart = 'details' | 'sessions' | 'summary';
export interface HostClassParams {
  classId?: string;
  formPart?: HostClassFormPart;
}
export interface ClassDetailsInput {
  name: string;
  category: string;
  description: string;
}

export type UpdateState<I> = (values: I, validated: boolean) => void;
