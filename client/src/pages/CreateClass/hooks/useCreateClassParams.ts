import useParams from 'src/common/hooks/useParams';
import { CreateClassParams } from '../types';

// TOTEST
const useCreateClassParams = (): CreateClassParams => {
  return useParams<CreateClassParams>();
};

export default useCreateClassParams;
