/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternTermAndConditions, UrlParamsTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
export const generateUrlTermAndConditions = (urlParams?: UrlParamsTermAndConditions): string =>
  generateUrl(patternTermAndConditions, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originTermAndConditions });
