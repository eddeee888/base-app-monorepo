import React, { useState, useContext, useCallback } from "react";

export interface HeaderContextValue {
  isVisible: boolean;
  leftComponent: React.ReactNode | null;
  setLeftComponent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
  showHeader: () => void;
  hideHeader: () => void;
}

const HeaderContext = React.createContext<HeaderContextValue | null>(null);

const HeaderProvider: React.FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [leftComponent, setLeftComponent] = useState<React.ReactNode | null>(null);

  const showHeader = useCallback((): void => setIsVisible(true), [setIsVisible]);
  const hideHeader = useCallback((): void => setIsVisible(false), [setIsVisible]);

  return (
    <HeaderContext.Provider value={{ isVisible, showHeader, hideHeader, leftComponent, setLeftComponent }}>
      {children}
    </HeaderContext.Provider>
  );
};

export const useHeader = (): HeaderContextValue => {
  const value = useContext(HeaderContext);
  if (!value) {
    throw new Error("useHeader must be used inside HeaderProvider");
  }
  return value;
};

export default HeaderProvider;
