import { Item } from 'src/common/localStorage/types';

const getItem = (key: Item): string | null => {
  if (window && window.localStorage) {
    return window.localStorage.getItem(key);
  }

  return null;
};

export default getItem;
