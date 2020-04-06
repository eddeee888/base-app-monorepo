import React from "react";
import { useViewerQuery } from "./AppHeader.generated";
import Header from "src/common/components/Header";

const AppHeader: React.FunctionComponent = () => {
  const { loading, error, data } = useViewerQuery();

  if (error || loading) {
    return null;
  }

  if (!data) {
    return null;
  }

  const viewer = data.me ? { ...data.me } : null;

  return <Header viewer={viewer} />;
};

export default AppHeader;
