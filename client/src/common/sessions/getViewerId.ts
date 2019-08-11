import { Item } from './Item';

type GetViewerIdFn = () => string | null;

const getViewerId: GetViewerIdFn = () => {
  return window.localStorage.getItem(Item.viewerId);
};

export default getViewerId;
