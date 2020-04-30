/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsSignup, patternSignup } from "./patternSignup";
import generateUrl from "route-codegen/generateUrl";
export type RedirectSignup = (urlParts: UrlPartsSignup) => void;
const useRedirectSignup = (): RedirectSignup => {
  const redirect: RedirectSignup = (urlParts) => {
    const to = generateUrl(patternSignup, {}, urlParts.urlQuery);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectSignup;
