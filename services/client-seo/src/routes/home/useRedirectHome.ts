/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlParamsHome, patternNextJSHome } from "./patternHome";
export type RedirectFnHome = (urlParams?: UrlParamsHome) => void;
export const useRedirectHome = (): RedirectFnHome => {
  const router = useRouter();
  const redirect: RedirectFnHome = (urlParams) => {
    const query = urlParams?.query ?? {};
    const path = {};
    const pathname = patternNextJSHome;
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
