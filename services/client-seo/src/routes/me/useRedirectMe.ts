/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsMe, patternMe, originMe } from "./patternMe";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnMe = (urlParts?: UrlPartsMe) => void;
const useRedirectMe = (): RedirectFnMe => {
  const redirect: RedirectFnMe = (urlParts) => {
    const to = generateUrl(patternMe, {}, urlParts?.query, urlParts?.origin ?? originMe);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectMe;
