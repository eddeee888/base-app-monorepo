import useRouter from 'use-react-router';

const useRedirect = (url: string): (() => void) => {
  const router = useRouter();

  if (!router) {
    throw new Error('useRedirect must be used within a React Router');
  }

  return () => router.history.push(url);
};

export default useRedirect;
