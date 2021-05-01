/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternSignup, UrlParamsSignup, originSignup } from "./patternSignup";
export const generateUrlSignup = (urlParams?: UrlParamsSignup): string =>
  generateUrl(patternSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originSignup });
