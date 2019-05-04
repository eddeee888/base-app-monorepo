import Box from '@material-ui/core/Box';
import Block from 'common/components/Block';
import Divider from 'common/components/Divider';
import FormError from 'common/components/FormError';
import Paper from 'common/components/Paper';
import Text from 'common/components/Text';
import React from 'react';
import { validationSchemas } from '../../constants';
import { NavFns } from '../../functionCreators/createNavFns';
import { HostClassState } from '../../types';
import ClassCategoriesQuery from '../ClassCategoriesQuery';
import { ClassSaveMutationResult } from '../ClassSaveMutation';
import Navigation from '../Navigation';
import ContactSection from './ContactSection';
import DetailsSection from './DetailsSection';
import SessionsSection from './SessionsSection';

export interface ClassSummaryProps<I> {
  values: I;
  classSaveResult: ClassSaveMutationResult;
  goNext: () => void;
  goPrevious: NavFns<I>['goPrevious'];
}

const ClassSummary: React.FunctionComponent<
  ClassSummaryProps<HostClassState>
> = ({ values, goPrevious, goNext, classSaveResult: { loading, error } }) => {
  const validated = validateValues(values);
  const goNextIsDisabled =
    !validated.details || !validated.contact || !validated.sessions || loading;

  return (
    <Block size="sm">
      <Paper>
        <ClassCategoriesQuery>
          {classCategoriesResult => (
            <DetailsSection
              values={values.details}
              classCategoriesResult={classCategoriesResult}
            />
          )}
        </ClassCategoriesQuery>
        {!validated.details && (
          <Text error>
            <i>Class details must be provided to continue</i>
          </Text>
        )}

        <Divider marginTop={2} marginBottom={2} />

        <ContactSection values={values.contact} />
        {!validated.contact && (
          <Text error>
            <i>Contact details must be provided to continue</i>
          </Text>
        )}

        <Divider marginTop={2} marginBottom={2} />

        <SessionsSection values={values.sessions} />
        {!validated.sessions && (
          <Text error>
            <i>There must be at least one valid session</i>
          </Text>
        )}
      </Paper>
      <Navigation
        goPrevious={() => goPrevious()}
        goNext={goNext}
        goNextText="Confirm"
        goNextIsDisabled={goNextIsDisabled}
        goNextIsLoading={loading}
      />
      {error && (
        <>
          <Box mt={1} />
          <FormError error="Something went wrong! Check your details and try again." />
        </>
      )}
    </Block>
  );
};

type Validations = { [key in keyof HostClassState]: boolean };

type ValidateValuesFn = (values: HostClassState) => Validations;

const validateValues: ValidateValuesFn = ({ details, contact, sessions }) => {
  return {
    details: validationSchemas.details.isValidSync(details),
    contact: validationSchemas.contact.isValidSync(contact),
    sessions: validationSchemas.sessions.isValidSync(sessions)
  };
};

export default ClassSummary;
