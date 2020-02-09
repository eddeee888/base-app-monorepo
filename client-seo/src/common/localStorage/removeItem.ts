import { Item } from 'src/common/localStorage/types';

const removeItem = (key: Item): void => {
  if (window && window.localStorage) {
    window.localStorage.removeItem(key);
  }
};

export default removeItem;
