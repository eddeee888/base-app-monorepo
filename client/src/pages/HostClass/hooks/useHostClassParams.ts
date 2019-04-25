import useParams from 'common/hooks/useParams';
import { HostClassParams } from '../types';

const useHostClassParams = (): HostClassParams => {
  return useParams<HostClassParams>();
};

export default useHostClassParams;
