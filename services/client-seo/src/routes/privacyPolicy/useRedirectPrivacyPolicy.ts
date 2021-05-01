/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlParamsPrivacyPolicy, patternNextJSPrivacyPolicy } from "./patternPrivacyPolicy";
export type RedirectFnPrivacyPolicy = (urlParams?: UrlParamsPrivacyPolicy) => void;
export const useRedirectPrivacyPolicy = (): RedirectFnPrivacyPolicy => {
  const router = useRouter();
  const redirect: RedirectFnPrivacyPolicy = (urlParams) => {
    const query = urlParams?.query ?? {};
    const path = {};
    const pathname = patternNextJSPrivacyPolicy;
    router.push({
      pathname: pathname,
      query: {
        ...path,
        ...query,
      },
    });
  };
  return redirect;
};
