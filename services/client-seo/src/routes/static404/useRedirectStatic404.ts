/* This file was automatically generated with route-codegen and should not be edited. */
import Router from "next/router";
import { patternStatic404, UrlPartsStatic404, patternNextJSStatic404 } from "./patternStatic404";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnStatic404 = (urlParts?: UrlPartsStatic404) => void;
const useRedirectStatic404 = (): RedirectFnStatic404 => {
  const redirect: RedirectFnStatic404 = (urlParts) => {
    const to = generateUrl(patternStatic404, {}, urlParts?.urlQuery, urlParts?.origin);
    Router.push(patternNextJSStatic404, to);
  };
  return redirect;
};
export default useRedirectStatic404;
