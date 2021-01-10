/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternHome, UrlPartsHome, originHome } from "./patternHome";
const generateUrlHome = (urlParts?: UrlPartsHome): string => generateUrl(patternHome, {}, urlParts?.query, urlParts?.origin ?? originHome);
export default generateUrlHome;
