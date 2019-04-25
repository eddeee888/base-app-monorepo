import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { FieldArray, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import IconButton from 'src/common/components/IconButton';
import { ClassSessionsInput } from '../../types';
import SessionBlock from './SessionBlock';
import SessionBlocksLogic from './SessionBlocksLogic';

export interface SessionBlockContainerProps {
  values: ClassSessionsInput;
  errors: FormikErrors<ClassSessionsInput>;
  touched: FormikTouched<ClassSessionsInput>;
}

const SessionBlocksContainer: React.FunctionComponent<
  SessionBlockContainerProps
> = ({ values, errors, touched }) => {
  return (
    <FieldArray name="sessions">
      {arrayHelpers => (
        <SessionBlocksLogic values={values} arrayHelpers={arrayHelpers}>
          {({ addSession, removeSessionFns, duplicateSessionFns }) => (
            <>
              {values.sessions &&
                values.sessions.map((session, index) => (
                  <SessionBlock
                    key={index}
                    index={index}
                    removeSession={removeSessionFns[index]}
                    duplicateSession={duplicateSessionFns[index]}
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
          )}
        </SessionBlocksLogic>
      )}
    </FieldArray>
  );
};

export default SessionBlocksContainer;
