/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternStatic500, UrlPartsStatic500, originStatic500 } from "./patternStatic500";
const generateUrlStatic500 = (urlParts?: UrlPartsStatic500): string =>
  generateUrl(patternStatic500, {}, urlParts?.urlQuery, urlParts?.origin ?? originStatic500);
export default generateUrlStatic500;
