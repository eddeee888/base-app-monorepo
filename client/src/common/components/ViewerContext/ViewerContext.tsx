import {
  clearViewerId,
  getViewerId,
  setViewerId
} from 'common/helpers/sessions';
import React, { useCallback, useContext, useMemo, useState } from 'react';

export interface Viewer {
  id: string;
}
export type SetViewerFn = (viewer: Viewer) => void;
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
  clearViewer: ClearViewerFn;
  checkIfViewer: CheckIfViewerFn;
  isLoggedIn: boolean;
}

const ViewerContext = React.createContext<ViewerContextValue | undefined>(
  undefined
);

const ViewerProvider = (props: ContextProps): React.ReactElement => {
  const viewerId = getViewerId();
  const initialViewer: Viewer | null = viewerId
    ? {
        id: viewerId
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
      setViewerId(newViewer.id);
      setViewerValue(newViewer);
    },
    [setViewerValue]
  );

  const clearViewer = useCallback<ClearViewerFn>(() => {
    clearViewerId();
    setViewerValue(null);
  }, [setViewerValue]);

  return {
    viewer,
    setViewer,
    clearViewer,
    checkIfViewer,
    isLoggedIn
  };
};

export default ViewerContext;
export { ViewerProvider, useViewer };
