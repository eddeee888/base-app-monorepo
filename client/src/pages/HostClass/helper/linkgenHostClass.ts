import { linkgen, Paths } from 'src/common/helpers/pathing';
import { HostClassFormPart } from '../types';

interface LinkgenHostClassFn {
  (formPart: HostClassFormPart, id?: string): string;
  (formPart?: HostClassFormPart, id?: string): string | undefined;
}

const linkgenHostClass: LinkgenHostClassFn = (formPart: any, id: any): any => {
  if (!formPart) {
    return undefined;
  }

  if (!id) {
    return linkgen(Paths.hostClass, { params: [formPart] });
  }
  return linkgen(Paths.hostClass, { params: [id, formPart] });
};

export default linkgenHostClass;
