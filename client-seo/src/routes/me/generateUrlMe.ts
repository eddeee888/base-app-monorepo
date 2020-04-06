/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "route-codegen";
import { patternMe, UrlPartsMe } from "./patternMe";
const generateUrlMe = (urlParts: UrlPartsMe): string => generateUrl(patternMe, {}, urlParts.urlQuery);
export default generateUrlMe;
