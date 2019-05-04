import { ClassSessionDay, ClassSessionInput } from '__generated__/globalTypes';
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
          ...values.contact,
          sessions: values.sessions.sessions.reduce<ClassSessionInput[]>(
            (sessionsArray, nextSession) => {
              if (!!nextSession.day) {
                sessionsArray.push({
                  ...nextSession,
                  day: ClassSessionDay[nextSession.day]
                });
              }
              return sessionsArray;
            },
            []
          )
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
