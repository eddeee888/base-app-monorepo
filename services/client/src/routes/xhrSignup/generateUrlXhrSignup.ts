/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternXhrSignup, UrlParamsXhrSignup, originXhrSignup } from "./patternXhrSignup";
export const generateUrlXhrSignup = (urlParams?: UrlParamsXhrSignup): string =>
  generateUrl(patternXhrSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originXhrSignup });
