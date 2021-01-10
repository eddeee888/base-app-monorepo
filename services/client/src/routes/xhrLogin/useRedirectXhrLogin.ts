/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsXhrLogin, patternXhrLogin, originXhrLogin } from "./patternXhrLogin";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnXhrLogin = (urlParts?: UrlPartsXhrLogin) => void;
const useRedirectXhrLogin = (): RedirectFnXhrLogin => {
  const redirect: RedirectFnXhrLogin = (urlParts) => {
    const to = generateUrl(patternXhrLogin, {}, urlParts?.query, urlParts?.origin ?? originXhrLogin);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectXhrLogin;
