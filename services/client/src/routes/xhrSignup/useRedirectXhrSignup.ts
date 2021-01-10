/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsXhrSignup, patternXhrSignup, originXhrSignup } from "./patternXhrSignup";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnXhrSignup = (urlParts?: UrlPartsXhrSignup) => void;
const useRedirectXhrSignup = (): RedirectFnXhrSignup => {
  const redirect: RedirectFnXhrSignup = (urlParts) => {
    const to = generateUrl(patternXhrSignup, {}, urlParts?.query, urlParts?.origin ?? originXhrSignup);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectXhrSignup;
