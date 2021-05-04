/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsClientSeoStaticImage, patternClientSeoStaticImage } from "./patternClientSeoStaticImage";
export type RedirectFnClientSeoStaticImage = (urlParams: UrlParamsClientSeoStaticImage) => void;
export const useRedirectClientSeoStaticImage = (): RedirectFnClientSeoStaticImage => {
  const router = useRouter();
  const redirect: RedirectFnClientSeoStaticImage = (urlParams) => {
    const href = generateUrl(patternClientSeoStaticImage, { path: urlParams.path, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
