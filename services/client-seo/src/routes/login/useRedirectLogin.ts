/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { UrlParamsLogin, patternNextJSLogin } from "./patternLogin";
export type RedirectFnLogin = (urlParams?: UrlParamsLogin) => void;
export const useRedirectLogin = (): RedirectFnLogin => {
  const router = useRouter();
  const redirect: RedirectFnLogin = (urlParams) => {
    const query = urlParams?.query ?? {};
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
