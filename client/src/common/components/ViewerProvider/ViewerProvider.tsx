import { removeItem, getItem, setItem, Item } from 'common/localStorage';
import React, { useContext, useState } from 'react';

export interface Viewer {
  id: string;
  avatar?: string | null;
  firstName: string;
}
export type SetViewerFn = (viewer: Viewer) => void;
export type SetViewerAvatarFn = (avatar?: string | null) => void;
export type ClearViewerFn = () => void;

interface ViewerContextValue {
  viewer: Viewer | null;
  setViewerValue: React.Dispatch<React.SetStateAction<Viewer | null>>;
}

interface ContextProps {
  value?: ViewerContextValue;
  children: React.ReactNode;
}
interface UseViewerResult {
  viewer: Viewer | null;
  setViewer: SetViewerFn;
  setViewerAvatar: SetViewerAvatarFn;
  clearViewer: ClearViewerFn;
  isLoggedIn: boolean;
}

const ViewerContext = React.createContext<ViewerContextValue | undefined>(undefined);

const ViewerProvider = (props: ContextProps): React.ReactElement => {
  const viewerId = getItem(Item.viewerId);
  const avatar = getItem(Item.viewerAvatar);
  const viewerFirstName = getItem(Item.viewerFirstName);

  const initialViewer: Viewer | null = viewerId
    ? {
        id: viewerId,
        avatar,
        firstName: viewerFirstName ? viewerFirstName : ''
      }
    : null;

  const [viewer, setViewerValue] = useState<Viewer | null>(initialViewer);

  return (
    <ViewerContext.Provider
      value={{
        viewer,
        setViewerValue
      }}
      {...props}
    />
  );
};

const useViewer = (): UseViewerResult => {
  const context = useContext(ViewerContext);
  if (!context) {
    throw new Error('useViewer must be used within a ViewerProvider');
  }
  const { viewer, setViewerValue } = context;

  const setViewer: SetViewerFn = newViewer => {
    setItem(Item.viewerId, newViewer.id);
    setItem(Item.viewerAvatar, newViewer.avatar);
    setItem(Item.viewerFirstName, newViewer.firstName);
    setViewerValue(newViewer);
  };

  const setViewerAvatar: SetViewerAvatarFn = avatar => {
    setItem(Item.viewerAvatar, avatar);
    setViewerValue(prevViewer => {
      if (!prevViewer) {
        return null;
      }
      return { ...prevViewer, avatar };
    });
  };

  const clearViewer: ClearViewerFn = () => {
    removeItem(Item.viewerId);
    removeItem(Item.viewerAvatar);
    removeItem(Item.viewerFirstName);
    setViewerValue(null);
  };

  return {
    viewer,
    setViewer,
    clearViewer,
    setViewerAvatar,
    isLoggedIn: !!viewer
  };
};

export default ViewerProvider;
export { useViewer, ViewerContext };
