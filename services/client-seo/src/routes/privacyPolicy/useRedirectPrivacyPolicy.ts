/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlPartsPrivacyPolicy, patternNextJSPrivacyPolicy } from "./patternPrivacyPolicy";
export type RedirectFnPrivacyPolicy = (urlParts?: UrlPartsPrivacyPolicy) => void;
const useRedirectPrivacyPolicy = (): RedirectFnPrivacyPolicy => {
  const router = useRouter();
  const redirect: RedirectFnPrivacyPolicy = (urlParts) => {
    const query = urlParts?.query ?? {};
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
export default useRedirectPrivacyPolicy;
