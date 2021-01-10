export type PageSize = "xs" | "sm" | "md" | "lg" | "xl";
export type PageSizeValue = { [key in PageSize]: { min: number; max: number } };
export type SpacingValue = 0 | 0.5 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10;
