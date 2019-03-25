export type CreateClassFormPart = 'details' | 'time';
export interface CreateClassParams {
  id?: string;
  formPart?: CreateClassFormPart;
}
