import { Item } from "./types";

export const getItem = (key: Item): string | null => {
  if (window && window.localStorage) {
    return window.localStorage.getItem(key);
  }

  return null;
};
