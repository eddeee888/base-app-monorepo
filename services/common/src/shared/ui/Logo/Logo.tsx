import { ImgHTMLAttributes, FunctionComponent } from "react";

export const Logo: FunctionComponent<ImgHTMLAttributes<HTMLImageElement>> = ({ ...props }) => (
  <img alt="" src="https://picsum.photos/60/60" {...props} />
);
