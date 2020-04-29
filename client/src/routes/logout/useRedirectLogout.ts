/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsLogout, patternLogout } from "./patternLogout";
import generateUrl from "route-codegen/generateUrl";
export type RedirectLogout = (urlParts: UrlPartsLogout) => void;
const useRedirectLogout = (): RedirectLogout => {
  const history = useHistory();
  const redirect: RedirectLogout = (urlParts) => {
    const to = generateUrl(patternLogout, {}, urlParts.urlQuery);
    history.push(to);
  };
  return redirect;
};
export default useRedirectLogout;
