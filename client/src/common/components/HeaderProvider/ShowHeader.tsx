import React, { useEffect } from "react";
import { useHeader } from "common/components/HeaderProvider/HeaderProvider";

const ShowHeader: React.FunctionComponent = () => {
  const { isVisible, showHeader } = useHeader();

  useEffect(() => {
    if (!isVisible) {
      showHeader();
    }
  }, [isVisible, showHeader]);

  return null;
};

export default ShowHeader;
