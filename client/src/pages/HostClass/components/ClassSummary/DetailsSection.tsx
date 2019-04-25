import { Grid } from '@material-ui/core';
import React from 'react';
import H2 from 'src/common/components/H2';
import Link from 'src/common/components/Link';
import Text from 'src/common/components/Text';
import linkgenHostClass from '../../helpers/linkgenHostClass';
import useHostClassParams from '../../hooks/useHostClassParams';
import { HostClassState } from '../../types';
import { ClassCategoryQueryResult } from '../ClassCategoriesQuery';

export interface DetailsSectionProps {
  values: HostClassState['details'];
  classCategoriesResult: ClassCategoryQueryResult;
}

const DetailsSection: React.FunctionComponent<DetailsSectionProps> = ({
  values,
  classCategoriesResult
}) => {
  const params = useHostClassParams();
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <H2 variant="h5">Class details</H2>
        </Grid>
        <Grid item xs={6}>
          <Text align="right">
            <Link to={linkgenHostClass('details', params.classId)}>edit</Link>
          </Text>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={4}>
          <Text gutterBottom>
            <b>Name</b>
          </Text>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Text gutterBottom>{values.name ? values.name : <i>N/A</i>}</Text>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={4}>
          <Text gutterBottom>
            <b>Category</b>
          </Text>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Text gutterBottom>
            <>
              {(() => {
                if (!classCategoriesResult) {
                  return '';
                }
                const { error, loading, data } = classCategoriesResult;

                if (error) {
                  return 'Unable to retrieve categories';
                }

                if (loading) {
                  return '';
                }

                if (values.category && data) {
                  return data.classCategories.filter(
                    category => category.id === values.category
                  )[0].name;
                }

                return <i>N/A</i>;
              })()}
            </>
          </Text>
        </Grid>
      </Grid>

      <Grid container>
        <Grid item xs={12} sm={4}>
          <Text gutterBottom>
            <b>Description</b>
          </Text>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Text gutterBottom>
            {values.description ? values.description : <i>N/A</i>}
          </Text>
        </Grid>
      </Grid>
    </>
  );
};

export default DetailsSection;
