import React from 'react';
import Block from 'src/common/components/Block';
import Divider from 'src/common/components/Divider';
import Paper from 'src/common/components/Paper';
import { HostClassState } from '../../types';
import ClassCategoriesQuery from '../ClassDetails/ClassCategoriesQuery';
import ContactSection from './ContactSection';
import DetailsSection from './DetailsSection';
import SessionsSection from './SessionsSection';

interface ClassSummaryProps {
  values: HostClassState;
}

const ClassSummary: React.FunctionComponent<ClassSummaryProps> = ({ values }) => {
  return (
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
    </Block>
  );
};

export default ClassSummary;
