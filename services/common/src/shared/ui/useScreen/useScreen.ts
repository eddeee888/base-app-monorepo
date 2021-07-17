import { useMediaQuery } from "@material-ui/core";
import breakpoints from "../../styles/breakpoints";

export interface UseScreenResult {
  isMobile: boolean;
  isDesktop: boolean;
}

export const useScreen = (): UseScreenResult => {
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isDesktop = useMediaQuery(breakpoints.up("md"));

  return {
    isMobile: isMobile,
    isDesktop: isDesktop,
  };
};
