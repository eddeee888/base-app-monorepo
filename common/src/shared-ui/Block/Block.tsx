import { css, cx } from "emotion";
import React from "react";
import { PageSize } from "../../shared-styles/types";
import { pageSize } from "../../shared-styles/sizes";

interface BlockProps {
  size: PageSize;
  children: React.ReactNode;
  fullHeight?: boolean;
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

const Block: React.FunctionComponent<BlockProps> = ({ size, children, fullHeight }) => {
  const maxWidthClassName = css`
    max-width: ${pageSize[size].max}px;
  `;

  const classNames = [defaultClassName, maxWidthClassName];
  if (fullHeight) {
    classNames.push(fullHeightClassName);
  }

  return <div className={cx([...classNames])}>{children}</div>;
};

export default Block;
