/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternGraphql, UrlParamsGraphql, originGraphql } from "./patternGraphql";
export const generateUrlGraphql = (urlParams?: UrlParamsGraphql): string =>
  generateUrl(patternGraphql, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originGraphql });
