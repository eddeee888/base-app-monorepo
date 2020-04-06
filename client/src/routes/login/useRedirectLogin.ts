/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsLogin, patternLogin } from "./patternLogin";
import { generateUrl } from "route-codegen";

const useRedirectLogin = (urlParts: UrlPartsLogin): (() => void) => {
  const history = useHistory();
  const to = generateUrl(patternLogin, {}, urlParts.urlQuery);
  return () => history.push(to);
};
export default useRedirectLogin;
