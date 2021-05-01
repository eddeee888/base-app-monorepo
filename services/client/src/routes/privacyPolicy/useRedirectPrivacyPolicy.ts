/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlParamsPrivacyPolicy, patternPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnPrivacyPolicy = (urlParams?: UrlParamsPrivacyPolicy) => void;
export const useRedirectPrivacyPolicy = (): RedirectFnPrivacyPolicy => {
  const redirect: RedirectFnPrivacyPolicy = (urlParams) => {
    const to = generateUrl(patternPrivacyPolicy, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originPrivacyPolicy });
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
