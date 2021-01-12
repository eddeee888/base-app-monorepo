import React, { useState, useContext, useCallback } from "react";

export interface LayoutContextValue {
  header: {
    isVisible: boolean;
    leftComponent: React.ReactNode | null;
    setLeftComponent: React.Dispatch<React.SetStateAction<React.ReactNode | null>>;
    show: () => void;
    hide: () => void;
  };
}

const context = React.createContext<LayoutContextValue | null>(null);

export const LayoutProvider: React.FunctionComponent = ({ children }) => {
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [leftComponent, setLeftComponent] = useState<React.ReactNode | null>(null);
  const showHeader = useCallback((): void => setIsHeaderVisible(true), [setIsHeaderVisible]);
  const hideHeader = useCallback((): void => setIsHeaderVisible(false), [setIsHeaderVisible]);

  return (
    <context.Provider
      value={{
        header: {
          isVisible: isHeaderVisible,
          show: showHeader,
          hide: hideHeader,
          leftComponent,
          setLeftComponent,
        },
      }}
    >
      {children}
    </context.Provider>
  );
};

export const useLayout = (): LayoutContextValue => {
  const value = useContext(context);
  if (!value) {
    throw new Error("useLayout must be used inside LayoutProvider");
  }
  return value;
};
