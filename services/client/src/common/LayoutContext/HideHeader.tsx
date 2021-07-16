import { useEffect, FunctionComponent } from "react";
import { useLayout } from "./LayoutContext";

export const HideHeader: FunctionComponent = () => {
  const {
    header: { isVisible, hide },
  } = useLayout();

  useEffect(() => {
    if (isVisible) {
      hide();
    }
  }, [isVisible, hide]);

  return null;
};
