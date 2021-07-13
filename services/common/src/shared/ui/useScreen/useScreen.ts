import { useMediaQuery } from "@material-ui/core";
import breakpoints from "../../styles/breakpoints";

export interface UseScreenResult {
  isMobile: boolean;
  isDesktop: boolean;
}

const useScreen = (): UseScreenResult => {
  const isMobile = useMediaQuery(breakpoints.down("sm"));
  const isDesktop = useMediaQuery(breakpoints.up("md"));

  return {
    isMobile: isMobile,
    isDesktop: isDesktop,
  };
};

export default useScreen;
