/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternStatic500, UrlParamsStatic500, originStatic500 } from "./patternStatic500";
export const generateUrlStatic500 = (urlParams?: UrlParamsStatic500): string =>
  generateUrl(patternStatic500, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic500 });
