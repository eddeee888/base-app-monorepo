/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternPrivacyPolicy, UrlPartsPrivacyPolicy, originPrivacyPolicy } from "./patternPrivacyPolicy";
const generateUrlPrivacyPolicy = (urlParts?: UrlPartsPrivacyPolicy): string =>
  generateUrl(patternPrivacyPolicy, {}, urlParts?.urlQuery, urlParts?.origin ?? originPrivacyPolicy);
export default generateUrlPrivacyPolicy;
