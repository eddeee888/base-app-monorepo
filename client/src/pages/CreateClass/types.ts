export type CreateClassFormPart = 'details' | 'time';
export interface CreateClassParams {
  classId?: string;
  formPart?: CreateClassFormPart;
}
