/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternHome, UrlParamsHome, originHome } from "./patternHome";
export const generateUrlHome = (urlParams?: UrlParamsHome): string =>
  generateUrl(patternHome, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originHome });
