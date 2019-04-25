import { Form, Formik } from 'formik';
import React from 'react';
import Block from 'src/common/components/Block';
import Paper from 'src/common/components/Paper';
import { validationSchemas } from '../../constants';
import { NavFunctions } from '../../handlers/createNavFunctions';
import { ClassSessionsInput } from '../../types';
import Navigation from '../Navigation';
import SessionBlocksContainer from './SessionBlocksContainer';

interface Props<I> {
  initialValues: I;
  goNext: NavFunctions<I>['goNext'];
  goPrevious: NavFunctions<I>['goPrevious'];
}

const ClassSessions: React.FunctionComponent<Props<ClassSessionsInput>> = ({
  initialValues,
  goNext,
  goPrevious
}) => (
    <Formik<ClassSessionsInput>
      initialValues={initialValues}
      validationSchema={validationSchemas.sessions}
      onSubmit={goNext}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Block size="md">
            <Paper>
              <SessionBlocksContainer
                values={values}
                errors={errors}
                touched={touched}
              />
            </Paper>
            <Navigation goPrevious={() => goPrevious(values)} />
          </Block>
        </Form>
      )}
    </Formik>
  );

export default ClassSessions;
