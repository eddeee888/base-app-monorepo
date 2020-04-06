/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsSignup, patternSignup } from "./patternSignup";
import { generateUrl } from "route-codegen";

const useRedirectSignup = (urlParts: UrlPartsSignup): (() => void) => {
  const history = useHistory();
  const to = generateUrl(patternSignup, {}, urlParts.urlQuery);
  return () => history.push(to);
};
export default useRedirectSignup;
