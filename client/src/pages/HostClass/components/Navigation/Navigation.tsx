import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Button from 'common/components/Button';
import React from 'react';

interface NavigationProps {
  goPrevious?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  goNext?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
  goNextText?: string;
  goNextIsDisabled?: boolean;
  goNextIsLoading?: boolean;
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
  goPrevious,
  goNextIsDisabled,
  goNextText = 'Next',
  goNext,
  goNextIsLoading
}) => {
  return (
    <>
      <Box mt={2} />
      <Grid container justify="space-between">
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
    </>
  );
};

export default Navigation;
