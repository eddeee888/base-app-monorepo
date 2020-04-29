import React, { useEffect } from "react";
import { useHeader } from "common/components/HeaderProvider/HeaderProvider";

const HideHeader: React.FunctionComponent = () => {
  const { isVisible, hideHeader } = useHeader();

  useEffect(() => {
    if (isVisible) {
      hideHeader();
    }
  }, [isVisible, hideHeader]);

  return null;
};

export default HideHeader;
