import { useEffect, useRef } from "react";
import { useBeforeunloadContext } from "./BeforeunloadContext";

export type UseBeforeunloadSetup = () => void;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const unload = (event: any): void => {
  event.preventDefault();
  event.returnValue = "";
};

export const useBeforeunloadSetup: UseBeforeunloadSetup = () => {
  const { isActivated } = useBeforeunloadContext();
  const callback = useRef(unload);
  useEffect(() => {
    if (isActivated) {
      const handleUnload = callback.current;

      window.addEventListener("beforeunload", handleUnload);

      return () => {
        window.removeEventListener("beforeunload", handleUnload);
      };
    }

    return;
  }, [isActivated]);
};
