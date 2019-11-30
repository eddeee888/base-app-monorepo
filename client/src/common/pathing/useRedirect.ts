import { useHistory } from 'react-router';

const useRedirect = (url: string): (() => void) => {
  const history = useHistory();

  return () => history.push(url);
};

export default useRedirect;
