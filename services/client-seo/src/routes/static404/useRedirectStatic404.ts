/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlParamsStatic404, patternNextJSStatic404 } from "./patternStatic404";
export type RedirectFnStatic404 = (urlParams?: UrlParamsStatic404) => void;
export const useRedirectStatic404 = (): RedirectFnStatic404 => {
  const router = useRouter();
  const redirect: RedirectFnStatic404 = (urlParams) => {
    const query = urlParams?.query ?? {};
    const path = {};
    const pathname = patternNextJSStatic404;
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
