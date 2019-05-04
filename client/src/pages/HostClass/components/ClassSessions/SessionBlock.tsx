import Grid from '@material-ui/core/Grid';
import Hidden from '@material-ui/core/Hidden';
import Tooltip from '@material-ui/core/Tooltip';
import FormFieldArray from 'common/components/FormFieldArray';
import { IconButton } from 'common/components/IconButton';
import Select from 'common/components/Select';
import Text from 'common/components/Text';
import TextInput from 'common/components/TextInput';
import { spacingRem } from 'common/helpers/spacing';
import { css } from 'emotion';
import { FormikErrors, FormikTouched } from 'formik';
import React from 'react';
import { dayOptions, sessionTimeOptions } from '../../constants';
import { ClassSession, FormClassSessionInput } from '../../types';

const sessionContainerClassName = css`
  margin-bottom: ${spacingRem(2)}rem;
`;

interface Props {
  index: number;
  duplicateSession: () => void;
  removeSession: () => void;
  errors: FormikErrors<FormClassSessionInput>;
  touched: FormikTouched<FormClassSessionInput>;
}

const SessionBlock: React.FunctionComponent<Props> = ({
  index,
  duplicateSession,
  removeSession,
  errors,
  touched
}) => {
  const actionButtons = (
    <>
      <Tooltip title="Duplicate session">
        <IconButton
          icon="duplicate"
          aria-label="Duplicate session"
          onClick={duplicateSession}
        />
      </Tooltip>
      <Tooltip title="Delete session">
        <IconButton
          icon="delete"
          aria-label="Delete session"
          onClick={removeSession}
        />
      </Tooltip>
    </>
  );

  return (
    <div className={sessionContainerClassName}>
      <Grid container justify="space-between" alignItems="center">
        <Grid item xs={6} sm={12}>
          <Text>Session #{index + 1}</Text>
        </Grid>
        <Hidden smUp>
          <Grid item xs>
            <Grid container justify="flex-end">
              {actionButtons}
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
      <Grid container justify="space-between" alignItems="center" spacing={1}>
        <Grid item xs={12} sm={4}>
          <FormFieldArray<FormClassSessionInput, ClassSession>
            name="sessions"
            property="day"
            index={index}
            errors={errors}
            touched={touched}
          >
            {({ field }) => (
              <Select {...field} options={dayOptions} label="Day of the week" />
            )}
          </FormFieldArray>
        </Grid>

        <Grid item xs={6} sm={2}>
          <FormFieldArray<FormClassSessionInput, ClassSession>
            name="sessions"
            property="startTime"
            index={index}
            errors={errors}
            touched={touched}
          >
            {({ field }) => (
              <Select
                {...field}
                options={sessionTimeOptions}
                label="Start time"
              />
            )}
          </FormFieldArray>
        </Grid>

        <Grid item xs={6} sm={2}>
          <FormFieldArray<FormClassSessionInput, ClassSession>
            name="sessions"
            property="endTime"
            index={index}
            errors={errors}
            touched={touched}
          >
            {({ field }) => (
              <Select
                {...field}
                options={sessionTimeOptions}
                label="End time"
              />
            )}
          </FormFieldArray>
        </Grid>

        <Grid item xs={12} sm={2}>
          <FormFieldArray<FormClassSessionInput, ClassSession>
            name="sessions"
            property="capacity"
            index={index}
            errors={errors}
            touched={touched}
          >
            {({ field }) => (
              <TextInput {...field} type="number" label="No. of learners" />
            )}
          </FormFieldArray>
        </Grid>

        <Hidden xsDown>
          <Grid item sm={2}>
            <Grid container justify="flex-end">
              {actionButtons}
            </Grid>
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
};

export default SessionBlock;
