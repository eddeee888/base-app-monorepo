import React, { useState, useContext } from "react";

interface HeaderContextValue {
  isVisible: boolean;
  showHeader: () => void;
  hideHeader: () => void;
}

const HeaderContext = React.createContext<HeaderContextValue>({ isVisible: false, showHeader: () => {}, hideHeader: () => {} });

const HeaderProvider: React.FunctionComponent = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const showHeader = (): void => setIsVisible(true);
  const hideHeader = (): void => setIsVisible(false);

  return <HeaderContext.Provider value={{ isVisible, showHeader, hideHeader }}>{children}</HeaderContext.Provider>;
};

export const useHeader = (): HeaderContextValue => {
  return useContext(HeaderContext);
};

export default HeaderProvider;
