import Grid from '@material-ui/core/Grid';
import { css } from 'emotion';
import React from 'react';
import Button from 'src/common/components/Button';
import { spacingRem } from 'src/common/helpers/spacing';

interface NavigationProps {
  goPrevious?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  goNext?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  goNextText?: string;
  goNextIsDisabled?: boolean;
}

const containerClassName = css`
  margin-top: ${spacingRem(2)}rem;
`;

const Navigation: React.FunctionComponent<NavigationProps> = ({
  goPrevious,
  goNextIsDisabled,
  goNextText = 'Next',
  goNext
}) => {
  return (
    <Grid container justify="space-between" className={containerClassName}>
      <Grid item xs={6}>
        {goPrevious && (
          <Button onClick={goPrevious} fullWidth={false}>
            Previous
          </Button>
        )}
      </Grid>
      <Grid item xs={6}>
        <Grid container justify="flex-end">
          <Button type="submit"
            onClick={goNext}
            fullWidth={false}
            disabled={goNextIsDisabled}
          >
            {goNextText}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navigation;
