import Grid from '@material-ui/core/Grid';
import { FieldArrayRenderProps, FormikErrors, FormikTouched } from 'formik';
import React, { useEffect } from 'react';
import IconButton from 'src/common/components/IconButton';
import { ClassSessionsInput } from '../../types';
import createAddSessionFn from './functionCreators/createAddSessionFn';
import createRemoveSessionFn from './functionCreators/createRemoveSessionFn';
import SessionBlock from './SessionBlock';

interface Props {
  values: ClassSessionsInput;
  arrayHelpers: FieldArrayRenderProps;
  errors: FormikErrors<ClassSessionsInput>;
  touched: FormikTouched<ClassSessionsInput>;
}

const SessionBlocksContainer: React.FunctionComponent<Props> = ({
  values,
  arrayHelpers,
  errors,
  touched
}) => {
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
            errors={errors}
            touched={touched}
          />
        ))}

      <Grid container justify="flex-end">
        <Grid item>
          <IconButton
            buttonType="fab"
            icon="add"
            color="primary"
            aria-label="Add session"
            onClick={addSession}
          />
        </Grid>
      </Grid>
    </>
  );
};

export default SessionBlocksContainer;
