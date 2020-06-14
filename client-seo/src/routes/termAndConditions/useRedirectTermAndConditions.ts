/* This file was automatically generated with route-codegen and should not be edited. */
import Router from "next/router";
import { patternTermAndConditions, UrlPartsTermAndConditions, patternNextJSTermAndConditions } from "./patternTermAndConditions";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnTermAndConditions = (urlParts?: UrlPartsTermAndConditions) => void;
const useRedirectTermAndConditions = (): RedirectFnTermAndConditions => {
  const redirect: RedirectFnTermAndConditions = (urlParts) => {
    const to = generateUrl(patternTermAndConditions, {}, urlParts?.urlQuery, urlParts?.origin);
    Router.push(patternNextJSTermAndConditions, to);
  };
  return redirect;
};
export default useRedirectTermAndConditions;
