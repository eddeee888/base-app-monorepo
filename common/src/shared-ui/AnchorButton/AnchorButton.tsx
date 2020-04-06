import React from "react";
import { css } from "emotion";
import { Link, LinkProps } from "@material-ui/core";
import { primaryFont } from "../../shared-styles/fonts";

const buttonClassName = css`
  font-family: ${primaryFont}, Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 1rem;
`;

export type AnchorButtonProps = Omit<Omit<LinkProps<"button">, "component">, "href">;

const AnchorButton = React.forwardRef<HTMLButtonElement, AnchorButtonProps>(function InnerAnchorButton(props, ref) {
  return <Link underline="none" color="primary" classes={{ button: buttonClassName }} {...props} component="button" ref={ref} />;
});

export default AnchorButton;
