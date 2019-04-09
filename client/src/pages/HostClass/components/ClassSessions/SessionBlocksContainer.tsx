import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { FieldArrayRenderProps, FormikErrors, FormikTouched } from 'formik';
import React, { useEffect } from 'react';
import IconButton from 'src/common/components/IconButton';
import { ClassSessionsInput } from '../../types';
import createAddSessionFn from './functionCreators/createAddSessionFn';
import createDuplicateSessionFn from './functionCreators/createDuplicateSessionFn';
import createRemoveSessionFn from './functionCreators/createRemoveSessionFn';
import SessionBlock from './SessionBlock';

export interface SessionBlockContainerProps {
  values: ClassSessionsInput;
  arrayHelpers: FieldArrayRenderProps;
  errors: FormikErrors<ClassSessionsInput>;
  touched: FormikTouched<ClassSessionsInput>;
}

const SessionBlocksContainer: React.FunctionComponent<
  SessionBlockContainerProps
> = ({ values, arrayHelpers, errors, touched }) => {
  const addSession = createAddSessionFn(arrayHelpers);

  useEffect(
    () => {
      if (values.sessions.length <= 0) {
        addSession();
      }
    },
    [values.sessions.length]
  );

  return (
    <>
      {values.sessions &&
        values.sessions.map((session, index) => (
          <SessionBlock
            key={index}
            index={index}
            removeSession={createRemoveSessionFn(arrayHelpers, index)}
            duplicateSession={createDuplicateSessionFn(
              arrayHelpers,
              session,
              index + 1
            )}
            errors={errors}
            touched={touched}
          />
        ))}

      <Grid container justify="flex-end">
        <Grid item>
          <Tooltip title="Add session">
            <IconButton
              buttonType="fab"
              icon="add"
              color="primary"
              aria-label="Add session"
              onClick={addSession}
            />
          </Tooltip>
        </Grid>
      </Grid>
    </>
  );
};

export default SessionBlocksContainer;
