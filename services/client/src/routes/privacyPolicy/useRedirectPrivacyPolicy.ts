/* This file was automatically generated with route-codegen and should not be edited. */
import { UrlPartsPrivacyPolicy, patternPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnPrivacyPolicy = (urlParts?: UrlPartsPrivacyPolicy) => void;
const useRedirectPrivacyPolicy = (): RedirectFnPrivacyPolicy => {
  const redirect: RedirectFnPrivacyPolicy = (urlParts) => {
    const to = generateUrl(patternPrivacyPolicy, {}, urlParts?.query, urlParts?.origin ?? originPrivacyPolicy);
    if (!!window && !!window.location) {
      window.location.href = to;
    }
    return;
  };
  return redirect;
};
export default useRedirectPrivacyPolicy;
