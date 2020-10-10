import React, { createContext, useState, FunctionComponent, useCallback, useContext } from "react";

export interface BeforeunloadValues {
  isActivated: boolean;
  activateBeforeunload: () => void;
  deactivateBeforeunload: () => void;
}

const BeforeunloadContext = createContext<BeforeunloadValues | null>(null);

export const BeforeunloadProvider: FunctionComponent = ({ children }) => {
  const [isActivated, setIsActivated] = useState(false);

  const activateBeforeunload = useCallback(() => setIsActivated(true), []);
  const deactivateBeforeunload = useCallback(() => setIsActivated(false), []);

  return (
    <BeforeunloadContext.Provider
      value={{
        isActivated: isActivated,
        activateBeforeunload: activateBeforeunload,
        deactivateBeforeunload: deactivateBeforeunload,
      }}
    >
      {children}
    </BeforeunloadContext.Provider>
  );
};

export const useBeforeunloadContext = (): BeforeunloadValues => {
  const values = useContext(BeforeunloadContext);

  if (!values) {
    throw new Error("useBeforeunloadContext must be used inside of BeforeunloadProvider");
  }

  return values;
};

export const useActivateBeforeunload = (): BeforeunloadValues["activateBeforeunload"] => {
  const { activateBeforeunload } = useBeforeunloadContext();
  return activateBeforeunload;
};

export const useDeactivateBeforeunload = (): BeforeunloadValues["activateBeforeunload"] => {
  const { deactivateBeforeunload } = useBeforeunloadContext();
  return deactivateBeforeunload;
};
