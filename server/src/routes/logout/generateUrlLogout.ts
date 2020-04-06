/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "route-codegen";
import { patternLogout, UrlPartsLogout } from "./patternLogout";
const generateUrlLogout = (urlParts: UrlPartsLogout): string => generateUrl(patternLogout, {}, urlParts.urlQuery);
export default generateUrlLogout;
