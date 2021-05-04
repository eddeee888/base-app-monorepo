/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { generateUrl } from "@route-codegen/utils";
import { UrlParamsTermAndConditions, patternTermAndConditions } from "./patternTermAndConditions";
export type RedirectFnTermAndConditions = (urlParams?: UrlParamsTermAndConditions) => void;
export const useRedirectTermAndConditions = (): RedirectFnTermAndConditions => {
  const router = useRouter();
  const redirect: RedirectFnTermAndConditions = (urlParams) => {
    const href = generateUrl(patternTermAndConditions, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    router.push(href);
  };
  return redirect;
};
