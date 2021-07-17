import { FunctionComponent, ReactNode } from "react";
import { css, cx } from "@emotion/css";
import { PageSize } from "../../styles/types";
import { pageSize } from "../../styles/sizes";

export interface BlockProps {
  size: PageSize;
  children: ReactNode;
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

export const Block: FunctionComponent<BlockProps> = ({ size, children, fullHeight, fullWidth = false, className }) => {
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
