/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsLogin, patternLogin } from "./patternLogin";
import generateUrl from "route-codegen/generateUrl";
export type RedirectLogin = (urlParts: UrlPartsLogin) => void;
const useRedirectLogin = (): RedirectLogin => {
  const redirect: RedirectLogin = (urlParts) => {
    const to = generateUrl(patternLogin, {}, urlParts.urlQuery);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectLogin;
