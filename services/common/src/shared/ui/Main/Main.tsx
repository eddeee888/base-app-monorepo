import { FunctionComponent, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { headerHeight, pageSize } from "../../styles/sizes";
import breakpoints from "../../styles/breakpoints";

export interface MainProps {
  children: ReactNode;
  className?: string;
  fullViewPortHeight?: boolean;
  fullWidth?: boolean;
  hasHeader?: boolean;
}

const contentNormalClassName = css`
  padding: 0 1rem;
  max-width: ${pageSize.lg.max}px;
  width: 100%;

  ${breakpoints.up("md")} {
    padding: 0 2rem;
  }
`;

const contentFullWidthClassName = css`
  width: 100%;
`;

const Main: FunctionComponent<MainProps> = ({ children, className, fullViewPortHeight, fullWidth = false, hasHeader = true }) => {
  const mainTagClassName = css`
    ${hasHeader ? `margin-top: ${headerHeight};` : ""}
    width: 100%;
    display: flex;
    justify-content: center;
    flex: 1;
  `;

  const fullViewPortHeightClassName = css`
    ${hasHeader ? `margin-top: 0px; padding-top: ${headerHeight};` : ""}
    height: 100vh;
  `;

  const classNames = [mainTagClassName];

  if (fullViewPortHeight) {
    classNames.push(fullViewPortHeightClassName);
  }

  const contentClassName = fullWidth ? contentFullWidthClassName : contentNormalClassName;

  return (
    <main className={cx([...classNames, className])}>
      <div className={contentClassName}>{children}</div>
    </main>
  );
};

export default Main;
