import React from 'react';
import { Box } from '@material-ui/core';
import { MarginValue } from '@bit/eddeee888.base-react-app-utils.styles';
import { css } from 'emotion';

interface Props {
  children: React.ReactNode;
  marginTop?: MarginValue;
  marginBottom?: MarginValue;
  marginLeft?: MarginValue;
  marginRight?: MarginValue;
}

const fullWidthClassname = css`
  width: 100%;
`;

const Row: React.FunctionComponent<Props> = ({ children, marginTop = 0, marginBottom = 2, marginLeft = 0, marginRight = 0 }) => {
  return (
    <Box className={fullWidthClassname} marginTop={marginTop} marginBottom={marginBottom} marginLeft={marginLeft} marginRight={marginRight}>
      {children}
    </Box>
  );
};

export default Row;
