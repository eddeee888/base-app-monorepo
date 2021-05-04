/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsLogin, patternLogin } from "./patternLogin";
export type RedirectFnLogin = (urlParams?: UrlParamsLogin) => void;
export const useRedirectLogin = (): RedirectFnLogin => {
  const router = useRouter();
  const redirect: RedirectFnLogin = (urlParams) => {
    const href = generateUrl(patternLogin, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
