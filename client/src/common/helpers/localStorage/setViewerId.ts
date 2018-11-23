import { Item } from './Item';

type SetViewerIdFn = (viewerID: string) => void;

const setViewerId: SetViewerIdFn = viewerID => {
  window.localStorage.setItem(Item.viewerId, viewerID);
};

export default setViewerId;
