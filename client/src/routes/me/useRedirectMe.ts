/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsMe, patternMe } from "./patternMe";
import { generateUrl } from "route-codegen";

const useRedirectMe = (urlParts: UrlPartsMe): (() => void) => {
  const history = useHistory();
  const to = generateUrl(patternMe, {}, urlParts.urlQuery);
  return () => history.push(to);
};
export default useRedirectMe;
