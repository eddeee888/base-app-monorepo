import { useEffect, FunctionComponent } from "react";
import { useLayout } from "./LayoutContext";

export const ShowHeader: FunctionComponent = () => {
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
