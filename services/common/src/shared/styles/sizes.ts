import { PageSizeValue } from "./types";

export const headerHeight = "5rem";

export const avatarExtraSmallPx = 40;
export const avatarSmallPx = 60;
export const avatarMediumPx = 100;
export const avatarLargePx = 140;
export const avatarExtraLargePx = 180;

export const remValue = 16;

export const pageSize: PageSizeValue = {
  xs: { min: 0, max: 599 },
  sm: { min: 600, max: 959 },
  md: { min: 960, max: 1279 },
  lg: { min: 1280, max: 1919 },
  xl: { min: 1920, max: 1920 },
};
