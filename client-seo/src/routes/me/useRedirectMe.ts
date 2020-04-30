/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsMe, patternMe } from "./patternMe";
import generateUrl from "route-codegen/generateUrl";
export type RedirectMe = (urlParts: UrlPartsMe) => void;
const useRedirectMe = (): RedirectMe => {
  const redirect: RedirectMe = (urlParts) => {
    const to = generateUrl(patternMe, {}, urlParts.urlQuery);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectMe;
