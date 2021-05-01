/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsTermAndConditions, patternTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnTermAndConditions = (urlParams?: UrlParamsTermAndConditions) => void;
export const useRedirectTermAndConditions = (): RedirectFnTermAndConditions => {
  const redirect: RedirectFnTermAndConditions = (urlParams) => {
    const to = generateUrl(patternTermAndConditions, {
      path: {},
      query: urlParams?.query,
      origin: urlParams?.origin ?? originTermAndConditions,
    });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
