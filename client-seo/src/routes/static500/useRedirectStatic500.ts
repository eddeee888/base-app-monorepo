/* This file was automatically generated with route-codegen and should not be edited. */
import Router from "next/router";
import { patternStatic500, UrlPartsStatic500, patternNextJSStatic500 } from "./patternStatic500";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnStatic500 = (urlParts?: UrlPartsStatic500) => void;
const useRedirectStatic500 = (): RedirectFnStatic500 => {
  const redirect: RedirectFnStatic500 = (urlParts) => {
    const to = generateUrl(patternStatic500, {}, urlParts?.urlQuery, urlParts?.origin);
    Router.push(patternNextJSStatic500, to);
  };
  return redirect;
};
export default useRedirectStatic500;
