import { remValue } from 'src/common/styles/unit';

const spacingUnit = 0.5; // this means 1 spacingUnit = 0.5rem = 8px

export type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5;
type SpacingResultPx = 0 | 8 | 16 | 24 | 32 | 40;

export const spacingPx = (value: SpacingValue): SpacingResultPx => {
  return (value * spacingUnit * remValue) as SpacingResultPx;
};

export const spacingRem = (value: SpacingValue): number => {
  return value * spacingUnit;
};
