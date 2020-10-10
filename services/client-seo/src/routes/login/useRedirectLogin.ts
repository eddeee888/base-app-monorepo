/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlPartsLogin, patternNextJSLogin } from "./patternLogin";
export type RedirectFnLogin = (urlParts?: UrlPartsLogin) => void;
const useRedirectLogin = (): RedirectFnLogin => {
  const router = useRouter();
  const redirect: RedirectFnLogin = (urlParts) => {
    const query = urlParts?.query ?? {};
    const path = {};
    const pathname = patternNextJSLogin;
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
export default useRedirectLogin;
