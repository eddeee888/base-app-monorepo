/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternSignup, UrlPartsSignup } from "./patternSignup";
const generateUrlSignup = (urlParts: UrlPartsSignup): string => generateUrl(patternSignup, {}, urlParts.urlQuery);
export default generateUrlSignup;
