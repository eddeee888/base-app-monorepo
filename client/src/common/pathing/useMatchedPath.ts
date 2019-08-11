import useRouter from 'use-react-router';

const useMatchedPath = (): string => {
  const router = useRouter();

  if (!router) {
    throw new Error('useMatchedPath must be used within a React Router');
  }

  return router.match.path;
};

export default useMatchedPath;
