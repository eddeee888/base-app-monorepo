import { match as RouterMatch } from 'react-router';
import useRouter from 'use-react-router';
// TODO: This is to be removed by the official useParams of react-router when it's live
// Also, don't worry about testing this since it's going to be tested there
// https://github.com/ReactTraining/react-router/pull/6453

const useParams = <P>(): RouterMatch<P>['params'] => {
  const { match } = useRouter<P>();

  return match.params;
};

export default useParams;
