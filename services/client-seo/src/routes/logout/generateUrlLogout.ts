/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternLogout, UrlPartsLogout, originLogout } from "./patternLogout";
const generateUrlLogout = (urlParts?: UrlPartsLogout): string =>
  generateUrl(patternLogout, {}, urlParts?.query, urlParts?.origin ?? originLogout);
export default generateUrlLogout;
