import { Grid } from '@material-ui/core';
import React from 'react';
import H2 from 'src/common/components/H2';
import Text from 'src/common/components/Text';
import { HostClassState } from '../../types';
import { ClassCategoryQueryResult } from '../ClassDetails/ClassCategoriesQuery';

interface Props {
    values: HostClassState['details'];
    classCategoriesResult: ClassCategoryQueryResult;
}

const DetailsSection: React.FunctionComponent<Props> = ({ values, classCategoriesResult }) => (
    <>
        <H2 variant="h5">Class details</H2>
        <Grid container>
            <Grid item xs={12} sm={4}>
                <Text variant="h6" gutterBottom>Name</Text>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Text gutterBottom>{values.name ? values.name : <i>N/A</i>}</Text>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={12} sm={4}>
                <Text variant="h6" gutterBottom>Category</Text>
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
                                return data
                                    .classCategories
                                    .filter(category => category.id === values.category)[0].name;
                            }

                            return <i>N/A</i>;
                        })()}
                    </>
                </Text>
            </Grid>
        </Grid>

        <Grid container>
            <Grid item xs={12} sm={4}>
                <Text variant="h6" gutterBottom>Description</Text>
            </Grid>
            <Grid item xs={12} sm={8}>
                <Text gutterBottom>{values.description ? values.description : <i>N/A</i>}</Text>
            </Grid>
        </Grid>
    </>
);

export default DetailsSection;
