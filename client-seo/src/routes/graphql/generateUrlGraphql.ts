/* This file was automatically generated with route-codegen and should not be edited. */
import generateUrl from "route-codegen/generateUrl";
import { patternGraphql, UrlPartsGraphql, originGraphql } from "./patternGraphql";
const generateUrlGraphql = (urlParts?: UrlPartsGraphql): string =>
  generateUrl(patternGraphql, {}, urlParts?.urlQuery, urlParts?.origin ?? originGraphql);
export default generateUrlGraphql;
