/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternXhrSignup, UrlPartsXhrSignup, originXhrSignup } from "./patternXhrSignup";
const generateUrlXhrSignup = (urlParts?: UrlPartsXhrSignup): string =>
  generateUrl(patternXhrSignup, {}, urlParts?.query, urlParts?.origin ?? originXhrSignup);
export default generateUrlXhrSignup;
