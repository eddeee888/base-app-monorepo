import { MatcherFunction } from "@testing-library/react";

export const inMultiNodes = (matcher: string): MatcherFunction => {
  const matcherFn: MatcherFunction = (content, node) => {
    const hasText = (node: any): boolean => node.textContent === matcher;
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

    return nodeHasText && childrenDontHaveText;
  };

  return matcherFn;
};
