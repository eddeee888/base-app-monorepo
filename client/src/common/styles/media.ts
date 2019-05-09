import { remValue } from 'common/styles/unit';

type ScreenSizes = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type Breakpoints = { [key in ScreenSizes]: number };

export const breakpoints: Breakpoints = {
  xl: 1920,
  lg: 1280,
  md: 960,
  sm: 600,
  xs: 0
};

type MediaQuery = { [key in ScreenSizes]: string };

export const mediaQuery: MediaQuery = {
  xl: `@media (min-width: ${breakpoints.xl / remValue}rem)`,
  lg: `@media (min-width: ${breakpoints.lg / remValue}rem)`,
  md: `@media (min-width: ${breakpoints.md / remValue}rem)`,
  sm: `@media (min-width: ${breakpoints.sm / remValue}rem)`,
  xs: `@media (min-width: ${breakpoints.xs / remValue}rem)`
};
