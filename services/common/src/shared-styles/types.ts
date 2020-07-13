export type PageSize = "xs" | "sm" | "md" | "lg" | "xl";
export type PageSizeValue = { [key in PageSize]: { min: number; max: number } };
export type SpacingValue = 0 | 1 | 2 | 3 | 4 | 5;
