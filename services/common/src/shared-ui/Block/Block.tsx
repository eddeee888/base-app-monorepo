import { css, cx } from "emotion";
import React from "react";
import { PageSize } from "../../shared-styles/types";
import { pageSize } from "../../shared-styles/sizes";

export interface BlockProps {
  size: PageSize;
  children: React.ReactNode;
  fullHeight?: boolean;
  fullWidth?: boolean;
  className?: string;
}

const defaultClassName = css`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const fullHeightClassName = css`
  height: 100%;
`;

const Block: React.FunctionComponent<BlockProps> = ({ size, children, fullHeight, fullWidth = false, className }) => {
  const maxWidthClassName = css`
    max-width: ${pageSize[size].max}px;
  `;
  const fullWidthClassName = css`
    width: ${pageSize[size].max}px;
  `;

  const classNames = [defaultClassName, maxWidthClassName, className];
  if (fullHeight) {
    classNames.push(fullHeightClassName);
  }

  if (fullWidth) {
    classNames.push(fullWidthClassName);
  }

  return <div className={cx([...classNames])}>{children}</div>;
};

export default Block;
