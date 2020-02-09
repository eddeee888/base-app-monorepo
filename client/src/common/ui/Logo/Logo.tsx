import React, { ImgHTMLAttributes } from 'react';

const Logo: React.FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => (
  <img alt="" src="https://picsum.photos/60/60" {...props} />
);

export default Logo;
