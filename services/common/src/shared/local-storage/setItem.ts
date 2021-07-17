import { Item } from "./types";

export const setItem = (key: Item, value?: string | null): void => {
  if (window && window.localStorage) {
    if (value) {
      window.localStorage.setItem(key, value);
      return;
    }

    window.localStorage.removeItem(key);
  }
};
