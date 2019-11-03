import { Item } from 'common/localStorage/types';

const removeItem = (key: Item): void => {
  window.localStorage.removeItem(key);
};

export default removeItem;
