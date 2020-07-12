/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternMe, UrlPartsMe, originMe } from "./patternMe";
const generateUrlMe = (urlParts?: UrlPartsMe): string => generateUrl(patternMe, {}, urlParts?.urlQuery, urlParts?.origin ?? originMe);
export default generateUrlMe;
