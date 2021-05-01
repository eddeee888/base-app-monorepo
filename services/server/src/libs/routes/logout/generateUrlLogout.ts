/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternLogout, UrlParamsLogout, originLogout } from "./patternLogout";
export const generateUrlLogout = (urlParams?: UrlParamsLogout): string =>
  generateUrl(patternLogout, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogout });
