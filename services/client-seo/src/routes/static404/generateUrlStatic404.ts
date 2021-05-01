/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternStatic404, UrlParamsStatic404, originStatic404 } from "./patternStatic404";
export const generateUrlStatic404 = (urlParams?: UrlParamsStatic404): string =>
  generateUrl(patternStatic404, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originStatic404 });
