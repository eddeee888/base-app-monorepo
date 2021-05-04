/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsHome, patternHome } from "./patternHome";
export type RedirectFnHome = (urlParams?: UrlParamsHome) => void;
export const useRedirectHome = (): RedirectFnHome => {
  const router = useRouter();
  const redirect: RedirectFnHome = (urlParams) => {
    const href = generateUrl(patternHome, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
