import { forwardRef } from "react";
import { css } from "@emotion/css";
import { Link, LinkProps, Box, CircularProgress } from "@material-ui/core";
import { primaryFont } from "../../styles/fonts";
import { spacingRem } from "../../styles/spacings";
import { textDisabled } from "../../styles/colors";

export type AnchorButtonProps = Omit<Omit<LinkProps<"button">, "component">, "href"> & {
  showSpinner?: boolean;
};

const AnchorButton = forwardRef<HTMLButtonElement, AnchorButtonProps>(function InnerAnchorButton(props, ref) {
  const { showSpinner, disabled, children, ...rest } = props;

  const buttonClassName = css`
    font-family: ${primaryFont}, Helvetica Neue, Helvetica, Arial, sans-serif;
    font-size: 1rem;
    ${disabled
      ? `display: flex; 
         color: ${textDisabled} !important;
         align-items: center;`
      : ""}
  `;

  return (
    <Link
      underline="none"
      color="primary"
      classes={{ button: buttonClassName }}
      disabled={disabled}
      {...rest}
      component="button"
      ref={ref}
      type="button"
    >
      {children}
      {showSpinner && (
        <>
          <Box ml={1} />
          <CircularProgress size={`${spacingRem(2)}rem`} />
        </>
      )}
    </Link>
  );
});

export default AnchorButton;
