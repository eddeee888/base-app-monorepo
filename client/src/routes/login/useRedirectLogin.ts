/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsLogin, patternLogin } from "./patternLogin";
import generateUrl from "route-codegen/generateUrl";
export type RedirectLogin = (urlParts: UrlPartsLogin) => void;
const useRedirectLogin = (): RedirectLogin => {
  const history = useHistory();
  const redirect: RedirectLogin = (urlParts) => {
    const to = generateUrl(patternLogin, {}, urlParts.urlQuery);
    history.push(to);
  };
  return redirect;
};
export default useRedirectLogin;
