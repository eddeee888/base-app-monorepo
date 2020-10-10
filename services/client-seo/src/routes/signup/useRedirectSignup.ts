/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlPartsSignup, patternNextJSSignup } from "./patternSignup";
export type RedirectFnSignup = (urlParts?: UrlPartsSignup) => void;
const useRedirectSignup = (): RedirectFnSignup => {
  const router = useRouter();
  const redirect: RedirectFnSignup = (urlParts) => {
    const query = urlParts?.query ?? {};
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
export default useRedirectSignup;
