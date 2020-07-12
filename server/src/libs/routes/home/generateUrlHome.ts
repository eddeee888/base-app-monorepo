/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternHome, UrlPartsHome, originHome } from "./patternHome";
const generateUrlHome = (urlParts?: UrlPartsHome): string =>
  generateUrl(patternHome, {}, urlParts?.urlQuery, urlParts?.origin ?? originHome);
export default generateUrlHome;
