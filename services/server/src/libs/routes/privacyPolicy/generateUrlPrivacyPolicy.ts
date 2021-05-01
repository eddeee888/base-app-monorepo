/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternPrivacyPolicy, UrlParamsPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
export const generateUrlPrivacyPolicy = (urlParams?: UrlParamsPrivacyPolicy): string =>
  generateUrl(patternPrivacyPolicy, { path: {}, query: urlParams?.query, origin: urlParams?.origin ?? originPrivacyPolicy });
