import { getByText } from '@testing-library/react';

interface AssertLinkOptions {
  text: string;
  href: string;
}

export function assertTextLink(
  container: HTMLElement,
  { text, href }: AssertLinkOptions
): void {
  const anchor = getByText(container, text).closest('A');

  expect(anchor).not.toBeNull();
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  expect(anchor!.getAttribute('href')).toBe(href);
}
