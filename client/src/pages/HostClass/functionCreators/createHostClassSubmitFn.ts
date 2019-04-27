import { ClassSaveMutationFn } from '../components/ClassSaveMutation';
import { HostClassState } from '../types';

type CreateHostClassSaveFn = (
  saveFn: ClassSaveMutationFn,
  values: HostClassState
) => () => void;

const createHostClassSubmitFn: CreateHostClassSaveFn = (saveFn, values) => {
  return () => {
    saveFn({
      variables: {
        input: {
          ...values.details,
          ...values.contact,
          sessions: []
        }
      }
    })
      .then(() => {
        console.log(
          `Successfully created class with values: ${JSON.stringify(values)} `
        );
      })
      .catch(e => {
        console.log(`Yo! some error! ${e}`);
      });
  };
};

export default createHostClassSubmitFn;
