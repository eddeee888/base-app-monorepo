import { ClassSessionDay, ClassSessionInput } from '__generated__/globalTypes';
import { RouteComponentProps } from 'react-router';
import { ClassSaveMutationFn } from '../components/ClassSaveMutation';
import linkgenHostClass from '../helpers/linkgenHostClass';
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
    history.push(linkgenHostClass('success', result.data.classSave.class.id));
  }
};

export default createHostClassSubmitFn;
