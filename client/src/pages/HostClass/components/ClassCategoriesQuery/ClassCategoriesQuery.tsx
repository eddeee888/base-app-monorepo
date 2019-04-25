import QueryProps from 'common/helpers/typings/QueryProps';
import gql from 'graphql-tag';
import React from 'react';
import { Query, QueryResult } from 'react-apollo';
import { ClassCategoryData } from './__generated__/ClassCategoryData';

const GET_CLASS_CATEGORIES = gql`
  query ClassCategoryData {
    classCategories {
      id
      name
    }
  }
`;

export type ClassCategoryQueryResult = QueryResult<ClassCategoryData>;

const ClassCategoriesQuery: React.FunctionComponent<
  QueryProps<ClassCategoryData>
> = props => (
  <Query<ClassCategoryData> {...props} query={GET_CLASS_CATEGORIES} />
);

export default ClassCategoriesQuery;
