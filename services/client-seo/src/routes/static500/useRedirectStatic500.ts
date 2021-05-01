/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlParamsStatic500, patternNextJSStatic500 } from "./patternStatic500";
export type RedirectFnStatic500 = (urlParams?: UrlParamsStatic500) => void;
export const useRedirectStatic500 = (): RedirectFnStatic500 => {
  const router = useRouter();
  const redirect: RedirectFnStatic500 = (urlParams) => {
    const query = urlParams?.query ?? {};
    const path = {};
    const pathname = patternNextJSStatic500;
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
