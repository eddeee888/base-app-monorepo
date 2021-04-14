import { useViewerQuery, ViewerUserFragment } from "./ViewerQuery.generated";

export type Viewer = ViewerUserFragment;

const useViewer = (): Viewer | null => {
  const { loading, error, data } = useViewerQuery();

  if (error || loading) {
    return null;
  }

  if (!data) {
    return null;
  }

  const viewer = data.me ? { ...data.me } : null;

  return viewer;
};

export default useViewer;
