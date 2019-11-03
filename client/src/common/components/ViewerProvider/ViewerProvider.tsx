import { removeItem, getItem, setItem, Item } from 'common/localStorage';
import React, { useCallback, useContext, useMemo, useState } from 'react';

export interface Viewer {
  id: string;
  avatar?: string | null;
}
export type SetViewerFn = (viewer: Viewer) => void;
export type SetViewerAvatarFn = (avatar?: string | null) => void;
export type ClearViewerFn = () => void;
export type CheckIfViewerFn = (userId: string) => boolean;

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
  checkIfViewer: CheckIfViewerFn;
  isLoggedIn: boolean;
}

const ViewerContext = React.createContext<ViewerContextValue | undefined>(
  undefined
);

const ViewerProvider = (props: ContextProps): React.ReactElement => {
  const viewerId = getItem(Item.viewerId);
  const avatar = getItem(Item.viewerAvatar);
  const initialViewer: Viewer | null = viewerId
    ? {
        id: viewerId,
        avatar
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

  const checkIfViewer = useCallback<CheckIfViewerFn>(
    userId => {
      if (viewer && viewer.id === userId) {
        return true;
      }
      return false;
    },
    [viewer]
  );

  const isLoggedIn = useMemo<boolean>(() => !!viewer, [viewer]);

  const setViewer = useCallback<SetViewerFn>(
    newViewer => {
      setItem(Item.viewerId, newViewer.id);
      setItem(Item.viewerAvatar, newViewer.avatar);
      setViewerValue(newViewer);
    },
    [setViewerValue]
  );

  const setViewerAvatar = useCallback<SetViewerAvatarFn>(
    avatar => {
      setItem(Item.viewerAvatar, avatar);
      setViewerValue(prevViewer => {
        if (!prevViewer) {
          return null;
        }
        return { ...prevViewer, avatar };
      });
    },
    [setViewerValue]
  );

  const clearViewer = useCallback<ClearViewerFn>(() => {
    removeItem(Item.viewerId);
    removeItem(Item.viewerAvatar);
    setViewerValue(null);
  }, [setViewerValue]);

  return {
    viewer,
    setViewer,
    clearViewer,
    checkIfViewer,
    setViewerAvatar,
    isLoggedIn
  };
};

export default ViewerProvider;
export { useViewer, ViewerContext };
