import { linkgen, Paths } from 'common/helpers/pathing';
import { RouteComponentProps } from 'react-router';
import { ClassSaveMutationFn } from '../components/ClassSaveMutation';
import { HostClassState } from '../types';

type CreateHostClassSaveFn = (
  saveFn: ClassSaveMutationFn,
  values: HostClassState,
  history: RouteComponentProps['history']
) => () => void;

const createHostClassSubmitFn: CreateHostClassSaveFn = (
  saveFn,
  values,
  history
) => async () => {
  try {
    const result = await saveFn({
      variables: {
        input: {
          ...values.details,
          price: values.details.price as number, // We need this here because input is `number | ''`
          ...values.contact,
          sessions: values.sessions.sessions as any // Day input is `ClassSessionDay | ''`
        }
      }
    });

    if (result && result.data) {
      history.push(
        linkgen(Paths.hostClassSuccess, {
          params: [result.data.classSave.class.id]
        })
      );
    } else {
      console.warn('Unexpected result in createHostClassSubmitFn');
    }
  } catch (e) {
    console.warn('Error in createHostClassSubmitFn');
  }
};

export default createHostClassSubmitFn;
