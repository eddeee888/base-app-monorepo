import MutationProps from 'common/helpers/typings/MutationProps';
import gql from 'graphql-tag';
import React, { FunctionComponent } from 'react';
import {
  Mutation,
  MutationFn,
  MutationOptions,
  MutationResult
} from 'react-apollo';
import {
  HostClassSave,
  HostClassSaveVariables
} from './__generated__/HostClassSave';

const CLASS_SAVE = gql`
  mutation HostClassSave($input: ClassSaveInput!) {
    classSave(input: $input) {
      class {
        id
        name
        category {
          id
          name
        }
        description
        streetAddress
        city
        postcode
        country
        contactNumber
        state
        streetUnit
        sessions {
          id
          day
          startTime
          endTime
          capacity
        }
      }
    }
  }
`;

export type ClassSaveMutationFn = MutationFn<
  HostClassSave,
  HostClassSaveVariables
>;
export type ClassSaveMutationResult = MutationResult<HostClassSave>;
export type ClassSaveMutationOptions = MutationOptions<
  HostClassSave,
  HostClassSaveVariables
>;

const ClassSaveMutation: FunctionComponent<
  MutationProps<HostClassSave, HostClassSaveVariables>
> = props => (
  <Mutation<HostClassSave, HostClassSaveVariables>
    {...props}
    mutation={CLASS_SAVE}
  />
);

export default ClassSaveMutation;
