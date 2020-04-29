/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternLogin, UrlPartsLogin } from "./patternLogin";
const generateUrlLogin = (urlParts: UrlPartsLogin): string => generateUrl(patternLogin, {}, urlParts.urlQuery);
export default generateUrlLogin;
