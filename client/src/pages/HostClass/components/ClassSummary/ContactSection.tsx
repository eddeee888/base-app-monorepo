import { Grid } from '@material-ui/core';
import React from 'react';
import H2 from 'src/common/components/H2';
import Text from 'src/common/components/Text';
import { HostClassState } from '../../types';

interface Props {
    values: HostClassState['contact'];
}

const ContactSection: React.FunctionComponent<Props> = ({
    values: {
        unit,
        streetAddress,
        city,
        country,
        postcode,
        state,
        contactNumber
    } }
) => (
        <>
            <H2 variant="h5">Contact details</H2>
            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Text variant="h6" gutterBottom>Address</Text>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Text gutterBottom>
                        {unit ? unit + ', ' : ''}
                        {streetAddress ? streetAddress : <i>N/A</i>}
                    </Text>
                    <Text gutterBottom>
                        {city} {state} {postcode} {country}
                    </Text>
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} sm={4}>
                    <Text variant="h6" gutterBottom>Contact number</Text>
                </Grid>
                <Grid item xs={12} sm={8}>
                    <Text gutterBottom>{contactNumber ? contactNumber : <i>N/A</i>}</Text>
                </Grid>
            </Grid>
        </>
    );

export default ContactSection;
