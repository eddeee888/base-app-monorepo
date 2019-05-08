import Grid from '@material-ui/core/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import { IconButtonFab } from 'common/components/IconButton';
import { FieldArray, FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { FormClassSessionInput } from '../../types';
import SessionBlock from './SessionBlock';
import SessionBlocksLogic from './SessionBlocksLogic';

export interface SessionBlocksProps {
  values: FormClassSessionInput;
  errors: FormikErrors<FormClassSessionInput>;
  touched: FormikTouched<FormClassSessionInput>;
}

const SessionBlocks: React.FunctionComponent<SessionBlocksProps> = ({
  values,
  errors,
  touched
}) => {
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
                    <IconButtonFab
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

export default SessionBlocks;