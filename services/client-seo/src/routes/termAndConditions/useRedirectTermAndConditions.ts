/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlPartsTermAndConditions, patternNextJSTermAndConditions } from "./patternTermAndConditions";
export type RedirectFnTermAndConditions = (urlParts?: UrlPartsTermAndConditions) => void;
const useRedirectTermAndConditions = (): RedirectFnTermAndConditions => {
  const router = useRouter();
  const redirect: RedirectFnTermAndConditions = (urlParts) => {
    const query = urlParts?.query ?? {};
    const path = {};
    const pathname = patternNextJSTermAndConditions;
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
export default useRedirectTermAndConditions;
