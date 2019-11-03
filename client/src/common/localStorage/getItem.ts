import { Item } from 'common/localStorage/types';

const getItem = (key: Item): string | null => {
  return window.localStorage.getItem(key);
};

export default getItem;
