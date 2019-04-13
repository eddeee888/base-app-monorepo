import { Form, Formik } from 'formik';
import React from 'react';
import Block from 'src/common/components/Block';
import Divider from 'src/common/components/Divider';
import Paper from 'src/common/components/Paper';
import { validationSchemas } from '../../constants';
import { NavFunctions } from '../../handlers/createNavFunctions';
import { HostClassState } from '../../types';
import ClassCategoriesQuery from '../ClassDetails/ClassCategoriesQuery';
import Navigation from '../Navigation';
import ContactSection from './ContactSection';
import DetailsSection from './DetailsSection';
import SessionsSection from './SessionsSection';

interface ClassSummaryProps<I> {
  initialValues: I;
  goNext: NavFunctions<I>['goNext'];
  goPrevious: NavFunctions<I>['goPrevious'];
}

const ClassSummary: React.FunctionComponent<ClassSummaryProps<HostClassState>> =
  ({ initialValues, goPrevious, goNext }) => (
    <Formik<HostClassState>
      initialValues={initialValues}
      validationSchema={validationSchemas}
      onSubmit={goNext}
    >
      {({ values }) => (
        <Form>
          <Block size="sm">
            <Paper>
              <ClassCategoriesQuery>
                {classCategoriesResult => (
                  <DetailsSection values={values.details} classCategoriesResult={classCategoriesResult} />
                )}
              </ClassCategoriesQuery>
              <Divider marginTop={2} marginBottom={2} />
              <ContactSection values={values.contact} />
              <Divider marginTop={2} marginBottom={2} />
              <SessionsSection values={values.sessions} />
            </Paper>
            <Navigation goPrevious={goPrevious} />
          </Block>
        </Form>
      )}
    </Formik>
  );

export default ClassSummary;
