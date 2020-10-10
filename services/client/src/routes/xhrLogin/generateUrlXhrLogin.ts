/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternXhrLogin, UrlPartsXhrLogin, originXhrLogin } from "./patternXhrLogin";
const generateUrlXhrLogin = (urlParts?: UrlPartsXhrLogin): string =>
  generateUrl(patternXhrLogin, {}, urlParts?.query, urlParts?.origin ?? originXhrLogin);
export default generateUrlXhrLogin;
