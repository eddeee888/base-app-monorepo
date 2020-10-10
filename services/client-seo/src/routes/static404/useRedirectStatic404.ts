/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlPartsStatic404, patternNextJSStatic404 } from "./patternStatic404";
export type RedirectFnStatic404 = (urlParts?: UrlPartsStatic404) => void;
const useRedirectStatic404 = (): RedirectFnStatic404 => {
  const router = useRouter();
  const redirect: RedirectFnStatic404 = (urlParts) => {
    const query = urlParts?.query ?? {};
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
export default useRedirectStatic404;
