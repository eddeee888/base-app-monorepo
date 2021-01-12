/* This file was automatically generated with route-codegen and should not be edited. */
import { generateUrl } from "@route-codegen/utils";
import { patternClientSeoStaticImage, UrlPartsClientSeoStaticImage, originClientSeoStaticImage } from "./patternClientSeoStaticImage";
const generateUrlClientSeoStaticImage = (urlParts: UrlPartsClientSeoStaticImage): string =>
  generateUrl(patternClientSeoStaticImage, urlParts.path, urlParts?.query, urlParts?.origin ?? originClientSeoStaticImage);
export default generateUrlClientSeoStaticImage;
