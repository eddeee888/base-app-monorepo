/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsSignup, patternSignup } from "./patternSignup";
export type RedirectFnSignup = (urlParams?: UrlParamsSignup) => void;
export const useRedirectSignup = (): RedirectFnSignup => {
  const router = useRouter();
  const redirect: RedirectFnSignup = (urlParams) => {
    const href = generateUrl(patternSignup, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
