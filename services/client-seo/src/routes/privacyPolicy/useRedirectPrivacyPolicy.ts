/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsPrivacyPolicy, patternPrivacyPolicy } from "./patternPrivacyPolicy";
export type RedirectFnPrivacyPolicy = (urlParams?: UrlParamsPrivacyPolicy) => void;
export const useRedirectPrivacyPolicy = (): RedirectFnPrivacyPolicy => {
  const router = useRouter();
  const redirect: RedirectFnPrivacyPolicy = (urlParams) => {
    const href = generateUrl(patternPrivacyPolicy, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
