import Block from 'common/components/Block';
import Paper from 'common/components/Paper';
import { Form, Formik } from 'formik';
import React from 'react';
import { validationSchemas } from '../../constants';
import { NavFns } from '../../functionCreators/createNavFns';
import { FormClassSessionInput } from '../../types';
import Navigation from '../Navigation';
import SessionBlocksContainer from './SessionBlocksContainer';

interface Props<I> {
  initialValues: I;
  goNext: NavFns<I>['goNext'];
  goPrevious: NavFns<I>['goPrevious'];
}

const ClassSessions: React.FunctionComponent<Props<FormClassSessionInput>> = ({
  initialValues,
  goNext,
  goPrevious
}) => (
  <Formik<FormClassSessionInput>
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
