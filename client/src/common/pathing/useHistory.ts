import { RouteComponentProps } from 'react-router';
import useRouter from 'use-react-router';

const useHistory = (): RouteComponentProps['history'] => {
  const router = useRouter();

  if (!router) {
    throw new Error('useHistory must be used within a React Router');
  }

  return router.history;
};

export default useHistory;
