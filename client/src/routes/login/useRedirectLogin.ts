/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsLogin, patternLogin } from "./patternLogin";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnLogin = (urlParts?: UrlPartsLogin) => void;
const useRedirectLogin = (): RedirectFnLogin => {
  const history = useHistory();
  const redirect: RedirectFnLogin = (urlParts) => {
    const to = generateUrl(patternLogin, {}, urlParts?.urlQuery, urlParts?.origin);
    history.push(to);
  };
  return redirect;
};
export default useRedirectLogin;
