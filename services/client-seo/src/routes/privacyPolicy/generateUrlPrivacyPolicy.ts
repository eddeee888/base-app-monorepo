/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternPrivacyPolicy, UrlPartsPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
const generateUrlPrivacyPolicy = (urlParts?: UrlPartsPrivacyPolicy): string =>
  generateUrl(patternPrivacyPolicy, {}, urlParts?.query, urlParts?.origin ?? originPrivacyPolicy);
export default generateUrlPrivacyPolicy;
