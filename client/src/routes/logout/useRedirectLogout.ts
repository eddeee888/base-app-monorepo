/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsLogout, patternLogout } from "./patternLogout";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnLogout = (urlParts?: UrlPartsLogout) => void;
const useRedirectLogout = (): RedirectFnLogout => {
  const history = useHistory();
  const redirect: RedirectFnLogout = (urlParts) => {
    const to = generateUrl(patternLogout, {}, urlParts?.urlQuery, urlParts?.origin);
    history.push(to);
  };
  return redirect;
};
export default useRedirectLogout;
