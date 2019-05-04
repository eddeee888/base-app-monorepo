import Grid from '@material-ui/core/Grid';
import Button from 'common/components/Button';
import { spacingRem } from 'common/helpers/spacing';
import { css } from 'emotion';
import React from 'react';

interface NavigationProps {
  goPrevious?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  goNext?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  goNextText?: string;
  goNextIsDisabled?: boolean;
  goNextIsLoading?: boolean;
}

const containerClassName = css`
  margin-top: ${spacingRem(2)}rem;
`;

const Navigation: React.FunctionComponent<NavigationProps> = ({
  goPrevious,
  goNextIsDisabled,
  goNextText = 'Next',
  goNext,
  goNextIsLoading
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
          <Button
            type="submit"
            onClick={goNextIsDisabled ? undefined : goNext}
            fullWidth={false}
            disabled={goNextIsDisabled}
            loading={goNextIsLoading}
          >
            {goNextText}
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Navigation;
