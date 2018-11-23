import React from 'react';
import {
  clearViewerId,
  getViewerId,
  setViewerId
} from 'src/common/helpers/localStorage';

export interface Viewer {
  id: string;
}
export type SetViewerFn = (viewer: Viewer) => void;
export type ClearViewerFn = () => void;

interface ContextProps {
  children: React.ReactNode;
}

interface ContextState {
  viewer: Viewer | null;
}

interface ContextFunctions {
  setViewer: SetViewerFn;
  clearViewer: ClearViewerFn;
}

type ContextVariables = ContextState & ContextFunctions;

const ViewerContext = React.createContext<ContextVariables>({
  viewer: null,
  setViewer: () => {},
  clearViewer: () => {}
});
const ViewerConsumer = ViewerContext.Consumer;
const Provider = ViewerContext.Provider;

class ViewerProvider extends React.Component<ContextProps, ContextState> {
  state: ContextState = {
    viewer: null
  };

  componentDidMount() {
    const viewerId = getViewerId();

    if (viewerId && !this.state.viewer) {
      const viewer: Viewer = {
        id: viewerId
      };
      this.setState({
        viewer
      });
    }
  }

  render() {
    return (
      <Provider
        value={{
          viewer: this.state.viewer,
          setViewer: this.setViewer,
          clearViewer: this.clearViewer
        }}
      >
        {this.props.children}
      </Provider>
    );
  }

  setViewer: SetViewerFn = viewer => {
    setViewerId(viewer.id);
    this.setState({
      viewer
    });
  }

  clearViewer: ClearViewerFn = () => {
    clearViewerId();
    this.setState({
      viewer: null
    });
  }
}

export default ViewerContext;
export { ViewerProvider, ViewerConsumer };
