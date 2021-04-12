import React, { useContext, useState, useEffect } from "react";
import { useViewerQuery, Viewer_UserFragment } from "./ViewerProvider.generated";
import Error500 from "~/common/components/Error500";
import Spinner from "~/common/shared-ui/Spinner";

export type Viewer = Omit<Viewer_UserFragment, "__typename">;
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
  setViewerFirstName: (firstName: string) => void;
  clearViewer: ClearViewerFn;
  isLoggedIn: boolean;
}

const ViewerContext = React.createContext<ViewerContextValue | undefined>(undefined);

const ViewerProvider = (props: ContextProps): React.ReactElement => {
  const [viewer, setViewerValue] = useState<Viewer | null>(null);
  const { data, loading, error } = useViewerQuery();
  useEffect(() => {
    if (data && data.me) {
      setViewerValue(data.me);
    }
  }, [data]);

  if (error) {
    return <Error500 />;
  }

  if (loading) {
    return <Spinner size="fullPage" />;
  }

  return (
    <ViewerContext.Provider
      value={{
        viewer,
        setViewerValue,
      }}
      {...props}
    />
  );
};

const useViewer = (): UseViewerResult => {
  const context = useContext(ViewerContext);
  if (!context) {
    throw new Error("useViewer must be used within a ViewerProvider");
  }
  const { viewer, setViewerValue } = context;

  const setViewerFirstName = (firstName: string): void => {
    setViewerValue((prevViewer) => {
      if (!prevViewer) {
        return null;
      }
      return { ...prevViewer, firstName };
    });
  };

  const setViewerAvatar: SetViewerAvatarFn = (avatar) => {
    setViewerValue((prevViewer) => {
      if (!prevViewer) {
        return null;
      }
      return { ...prevViewer, avatar };
    });
  };

  const clearViewer: ClearViewerFn = () => {
    setViewerValue(null);
  };

  return {
    viewer,
    setViewer: setViewerValue,
    clearViewer,
    setViewerAvatar,
    setViewerFirstName,
    isLoggedIn: !!viewer,
  };
};

export default ViewerProvider;
export { useViewer, ViewerContext };
