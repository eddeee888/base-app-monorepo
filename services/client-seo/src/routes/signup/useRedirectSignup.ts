/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlParamsSignup, patternNextJSSignup } from "./patternSignup";
export type RedirectFnSignup = (urlParams?: UrlParamsSignup) => void;
export const useRedirectSignup = (): RedirectFnSignup => {
  const router = useRouter();
  const redirect: RedirectFnSignup = (urlParams) => {
    const query = urlParams?.query ?? {};
    const path = {};
    const pathname = patternNextJSSignup;
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
