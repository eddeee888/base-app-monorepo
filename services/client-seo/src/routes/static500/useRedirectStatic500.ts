/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlPartsStatic500, patternNextJSStatic500 } from "./patternStatic500";
export type RedirectFnStatic500 = (urlParts?: UrlPartsStatic500) => void;
const useRedirectStatic500 = (): RedirectFnStatic500 => {
  const router = useRouter();
  const redirect: RedirectFnStatic500 = (urlParts) => {
    const query = urlParts?.query ?? {};
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
export default useRedirectStatic500;
