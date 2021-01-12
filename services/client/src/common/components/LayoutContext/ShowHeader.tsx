import React, { useEffect } from "react";
import { useLayout } from "./LayoutContext";

const ShowHeader: React.FunctionComponent = () => {
  const {
    header: { isVisible, show },
  } = useLayout();

  useEffect(() => {
    if (!isVisible) {
      show();
    }
  }, [isVisible, show]);

  return null;
};

export default ShowHeader;
