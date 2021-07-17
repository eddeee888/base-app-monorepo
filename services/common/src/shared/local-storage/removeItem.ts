import { Item } from "./types";

export const removeItem = (key: Item): void => {
  if (window && window.localStorage) {
    window.localStorage.removeItem(key);
  }
};
