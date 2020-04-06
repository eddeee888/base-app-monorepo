/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsLogout, patternLogout } from "./patternLogout";
import { generateUrl } from "route-codegen";

const useRedirectLogout = (urlParts: UrlPartsLogout): (() => void) => {
  const history = useHistory();
  const to = generateUrl(patternLogout, {}, urlParts.urlQuery);
  return () => history.push(to);
};
export default useRedirectLogout;
