/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsLogin, patternLogin, originLogin } from "./patternLogin";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnLogin = (urlParts?: UrlPartsLogin) => void;
const useRedirectLogin = (): RedirectFnLogin => {
  const redirect: RedirectFnLogin = (urlParts) => {
    const to = generateUrl(patternLogin, {}, urlParts?.query, urlParts?.origin ?? originLogin);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectLogin;
