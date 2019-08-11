import useRouter from 'use-react-router';

const useParams = <P>(): P => {
  const router = useRouter<P>();

  if (!router) {
    throw new Error('useParams must be used within a React Router');
  }

  return router.match.params;
};

export default useParams;
