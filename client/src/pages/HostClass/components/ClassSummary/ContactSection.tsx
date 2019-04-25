import { Grid } from '@material-ui/core';
import React from 'react';
import H2 from 'src/common/components/H2';
import Link from 'src/common/components/Link';
import Text from 'src/common/components/Text';
import linkgenHostClass from '../../helpers/linkgenHostClass';
import useHostClassParams from '../../hooks/useHostClassParams';
import { HostClassState } from '../../types';

export interface ContactSectionProps {
  values: HostClassState['contact'];
}

const ContactSection: React.FunctionComponent<ContactSectionProps> = ({
  values: { unit, streetAddress, city, country, postcode, state, contactNumber }
}) => {
  const params = useHostClassParams();
  return (
    <>
      <Grid container alignItems="center">
        <Grid item xs={6}>
          <H2 variant="h5">Contact details</H2>
        </Grid>
        <Grid item xs={6}>
          <Text align="right">
            <Link to={linkgenHostClass('contact', params.classId)}>edit</Link>
          </Text>
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={12} sm={4}>
          <Text gutterBottom>
            <b>Address</b>
          </Text>
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
          <Text gutterBottom>
            <b>Contact number</b>
          </Text>
        </Grid>
        <Grid item xs={12} sm={8}>
          <Text gutterBottom>{contactNumber ? contactNumber : <i>N/A</i>}</Text>
        </Grid>
      </Grid>
    </>
  );
};

export default ContactSection;
