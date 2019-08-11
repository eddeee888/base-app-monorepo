import { getByText } from '@testing-library/react';

interface AssertButtonOptions {
  text: string;
}

export function assertButton(
  container: HTMLElement,
  { text }: AssertButtonOptions
): void {
  const button = getByText(container, text).closest('Button');

  expect(button).not.toBeNull();
}
