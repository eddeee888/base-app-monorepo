/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsTermAndConditions, patternTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnTermAndConditions = (urlParts?: UrlPartsTermAndConditions) => void;
const useRedirectTermAndConditions = (): RedirectFnTermAndConditions => {
  const redirect: RedirectFnTermAndConditions = (urlParts) => {
    const to = generateUrl(patternTermAndConditions, {}, urlParts?.urlQuery, urlParts?.origin ?? originTermAndConditions);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectTermAndConditions;
