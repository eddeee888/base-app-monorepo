/* This file was automatically generated with route-codegen and should not be edited. */
import Router from "next/router";
import { patternHome, UrlPartsHome, patternNextJSHome } from "./patternHome";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnHome = (urlParts?: UrlPartsHome) => void;
const useRedirectHome = (): RedirectFnHome => {
  const redirect: RedirectFnHome = (urlParts) => {
    const to = generateUrl(patternHome, {}, urlParts?.urlQuery, urlParts?.origin);
    Router.push(patternNextJSHome, to);
  };
  return redirect;
};
export default useRedirectHome;
