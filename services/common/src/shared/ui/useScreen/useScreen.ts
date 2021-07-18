import { useMediaQuery } from "@material-ui/core";
import { theme } from "../../styles/theme";

export interface UseScreenResult {
  isMobile: boolean;
  isDesktop: boolean;
}

export const useScreen = (): UseScreenResult => {
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  return {
    isMobile: isMobile,
    isDesktop: isDesktop,
  };
};
