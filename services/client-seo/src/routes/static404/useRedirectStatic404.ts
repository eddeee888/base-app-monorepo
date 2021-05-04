/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsStatic404, patternStatic404 } from "./patternStatic404";
export type RedirectFnStatic404 = (urlParams?: UrlParamsStatic404) => void;
export const useRedirectStatic404 = (): RedirectFnStatic404 => {
  const router = useRouter();
  const redirect: RedirectFnStatic404 = (urlParams) => {
    const href = generateUrl(patternStatic404, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
