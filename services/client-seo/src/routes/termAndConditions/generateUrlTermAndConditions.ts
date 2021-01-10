/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternTermAndConditions, UrlPartsTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
const generateUrlTermAndConditions = (urlParts?: UrlPartsTermAndConditions): string =>
  generateUrl(patternTermAndConditions, {}, urlParts?.query, urlParts?.origin ?? originTermAndConditions);
export default generateUrlTermAndConditions;
