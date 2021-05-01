/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternLogin, UrlParamsLogin, originLogin } from "./patternLogin";
export const generateUrlLogin = (urlParams?: UrlParamsLogin): string =>
  generateUrl(patternLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originLogin });
