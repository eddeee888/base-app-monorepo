/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternLogin, UrlPartsLogin, originLogin } from "./patternLogin";
const generateUrlLogin = (urlParts?: UrlPartsLogin): string =>
  generateUrl(patternLogin, {}, urlParts?.urlQuery, urlParts?.origin ?? originLogin);
export default generateUrlLogin;
