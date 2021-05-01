/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternMe, UrlParamsMe, originMe } from "./patternMe";
export const generateUrlMe = (urlParams?: UrlParamsMe): string =>
  generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originMe });
