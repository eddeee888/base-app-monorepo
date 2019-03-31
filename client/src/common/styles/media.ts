import { remValue } from 'src/common/styles/unit';

export interface Breakpoints {
  extraSmall: number;
  small: number;
  medium: number;
  large: number;
  extraLarge: number;
}

export const breakpoints: Breakpoints = {
  extraLarge: 1920,
  large: 1280,
  medium: 960,
  small: 600,
  extraSmall: 0
};

export const mediaQuery = {
  extraLarge: `@media (min-width: ${breakpoints.extraLarge / remValue}rem)`,
  large: `@media (min-width: ${breakpoints.large / remValue}rem)`,
  medium: `@media (min-width: ${breakpoints.medium / remValue}rem)`,
  small: `@media (min-width: ${breakpoints.small / remValue}rem)`,
  extraSmall: `@media (min-width: ${breakpoints.extraSmall / remValue}rem)`
};
