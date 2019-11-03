import createRoute from './createRoute';

export type HostClassSubform =
  | 'details'
  | 'contact'
  | 'sessions'
  | 'images'
  | 'summary';

interface Users {
  userId: string;
}
interface HostClassCreate {
  formPart?: HostClassSubform;
}
interface HostClassEdit {
  classId: string;
  formPart?: HostClassSubform;
}
interface HostClassSuccess {
  classId: string;
}
interface Classes {
  classId: string;
}

interface ClassesStudents {
  classId: string;
}

const routes = {
  home: createRoute('/'),
  login: createRoute('/login'),
  signup: createRoute('/signup'),
  logout: createRoute('/logout'),
  me: createRoute('/me'),
  meUploadAvatar: createRoute('/me/upload-avatar'),
  users: createRoute<Users>('/users/:userId'),
  hostClassCreate: createRoute<HostClassCreate>(
    '/host-a-class/:formPart(details|contact|sessions|images|summary)?'
  ),
  hostClassEdit: createRoute<HostClassEdit>(
    '/host-a-class/:classId/:formPart(details|contact|sessions|images|summary)?'
  ),
  hostClassSuccess: createRoute<HostClassSuccess>(
    '/host-a-class-success/:classId'
  ),
  classes: createRoute<Classes>('/classes/:classId'),
  classesStudents: createRoute<ClassesStudents>('/classes/:classId/students')
};

export default routes;
