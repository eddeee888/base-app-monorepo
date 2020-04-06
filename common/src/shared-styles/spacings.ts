import { remValue } from "./sizes";
import { SpacingValue } from "./types";

const spacingUnit = 0.5; // this means 1 spacingUnit = 0.5rem = 8px

export const spacingPx = (value: SpacingValue): number => {
  return value * spacingUnit * remValue;
};

export const spacingRem = (value: SpacingValue): number => {
  return value * spacingUnit;
};
