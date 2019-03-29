import Grid from '@material-ui/core/Grid';
import { css } from 'emotion';
import React from 'react';
import Button from 'src/common/components/Button';
import Link from 'src/common/components/Link';
import { spacingRem } from 'src/common/helpers/spacing';
import useHostClassNav from 'src/pages/HostClass/hooks/useHostClassNav';

const containerClassName = css`
  margin-top: ${spacingRem(2)}rem;
`;

const Navigation: React.FunctionComponent = () => {
  const { previous, next } = useHostClassNav();
  return (
    <Grid container justify="space-between" className={containerClassName}>
      <Grid item xs={4}>
        {previous && (
          <Link to={previous}>
            <Button>Previous</Button>
          </Link>
        )}
      </Grid>
      <Grid item xs={4}>
        <Button type="submit">{next ? 'Next' : 'Submit'}</Button>
      </Grid>
    </Grid>
  );
};

export default Navigation;
