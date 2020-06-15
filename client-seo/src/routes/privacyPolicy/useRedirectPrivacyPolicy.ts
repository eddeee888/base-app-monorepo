/* This file was automatically generated with route-codegen and should not be edited. */
import Router from "next/router";
import { patternPrivacyPolicy, UrlPartsPrivacyPolicy, patternNextJSPrivacyPolicy } from "./patternPrivacyPolicy";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnPrivacyPolicy = (urlParts?: UrlPartsPrivacyPolicy) => void;
const useRedirectPrivacyPolicy = (): RedirectFnPrivacyPolicy => {
  const redirect: RedirectFnPrivacyPolicy = (urlParts) => {
    const to = generateUrl(patternPrivacyPolicy, {}, urlParts?.urlQuery, urlParts?.origin);
    Router.push(patternNextJSPrivacyPolicy, to);
  };
  return redirect;
};
export default useRedirectPrivacyPolicy;
