import { Item } from 'common/localStorage/types';

const setItem = (key: Item, value?: string | null): void => {
  if (!!value) {
    window.localStorage.setItem(key, value);
    return;
  }

  window.localStorage.removeItem(key);
};

export default setItem;
