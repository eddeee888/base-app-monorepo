/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternSignup, UrlPartsSignup, originSignup } from "./patternSignup";
const generateUrlSignup = (urlParts?: UrlPartsSignup): string =>
  generateUrl(patternSignup, {}, urlParts?.query, urlParts?.origin ?? originSignup);
export default generateUrlSignup;
