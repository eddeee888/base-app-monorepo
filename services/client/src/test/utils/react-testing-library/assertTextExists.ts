import { getByText } from "@testing-library/react";

export function assertTextExists(container: HTMLElement, text: string | RegExp): void {
  getByText(container, (content, element) => {
    const hasText = (node: Element): boolean => {
      if (typeof text === "string") {
        return node.textContent === text;
      }
      return node.textContent ? !!node.textContent.match(text) : false;
    };
    const nodeHasText = hasText(element);
    const childrenDontHaveText = Array.from(element.children).every((child) => !hasText(child));
    return nodeHasText && childrenDontHaveText;
  });
}
