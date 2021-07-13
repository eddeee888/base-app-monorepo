import { Item } from "./types";

const setItem = (key: Item, value?: string | null): void => {
  if (window && window.localStorage) {
    if (value) {
      window.localStorage.setItem(key, value);
      return;
    }

    window.localStorage.removeItem(key);
  }
};

export default setItem;
