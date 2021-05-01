/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternXhrLogin, UrlParamsXhrLogin, originXhrLogin } from "./patternXhrLogin";
export const generateUrlXhrLogin = (urlParams?: UrlParamsXhrLogin): string =>
  generateUrl(patternXhrLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrLogin });
