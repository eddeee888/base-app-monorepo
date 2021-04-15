import { MatcherFunction } from "@testing-library/react";

export const inMultiNodes = (matcher: string | RegExp): MatcherFunction => {
  const matcherFn: MatcherFunction = (content, node) => {
    if (!node) {
      return false;
    }
    const hasText = (node: HTMLElement | Element): boolean => {
      if (typeof matcher === "string") {
        return node.textContent === matcher;
      }
      return node.textContent ? !!node.textContent.match(matcher) : false;
    };
    const nodeHasText = hasText(node);
    const childrenDontHaveText = Array.from(node.children).every((child) => !hasText(child));

    return nodeHasText && childrenDontHaveText;
  };

  return matcherFn;
};
