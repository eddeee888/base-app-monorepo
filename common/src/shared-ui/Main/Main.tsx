import { css, cx } from "emotion";
import React from "react";
import { headerHeight, pageSize } from "../../shared-styles/sizes";
import breakpoints from "../../shared-styles/media";

breakpoints.up("md");

export interface MainProps {
  children: React.ReactNode;
  className?: string;
  fullViewPortHeight?: boolean;
  fullWidth?: boolean;
}

const mainTagClassName = css`
  margin-top: ${headerHeight};
  width: 100%;
  display: flex;
  justify-content: center;
  flex: 1;
`;

const fullViewPortHeightClassName = css`
  margin-top: 0px;
  height: 100vh;
`;

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

const Main: React.FunctionComponent<MainProps> = ({ children, className, fullViewPortHeight, fullWidth = false }) => {
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
