import { useEffect, FunctionComponent } from "react";
import { useLayout } from "./LayoutContext";

const ShowHeader: FunctionComponent = () => {
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
