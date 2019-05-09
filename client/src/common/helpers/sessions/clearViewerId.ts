import { Item } from './Item';

type ClearViewerIdFn = () => void;

const setViewerId: ClearViewerIdFn = () => {
  window.localStorage.removeItem(Item.viewerId);
};

export default setViewerId;
