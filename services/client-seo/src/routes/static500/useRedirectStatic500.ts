/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsStatic500, patternStatic500 } from "./patternStatic500";
export type RedirectFnStatic500 = (urlParams?: UrlParamsStatic500) => void;
export const useRedirectStatic500 = (): RedirectFnStatic500 => {
  const router = useRouter();
  const redirect: RedirectFnStatic500 = (urlParams) => {
    const href = generateUrl(patternStatic500, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
