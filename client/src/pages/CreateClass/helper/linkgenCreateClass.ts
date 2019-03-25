import { linkgen, Paths } from 'src/common/helpers/pathing';
import { CreateClassFormPart } from '../types';

interface LinkgenCreateClass {
  (formPart: CreateClassFormPart, id?: string): string;
  (formPart?: CreateClassFormPart, id?: string): string | undefined;
}

const linkgenCreateClass: LinkgenCreateClass = (
  formPart: any,
  id: any
): any => {
  if (!formPart) {
    return undefined;
  }

  if (!id) {
    return linkgen(Paths.createClass, { params: [formPart] });
  }
  return linkgen(Paths.createClass, { params: [id, formPart] });
};

export default linkgenCreateClass;
