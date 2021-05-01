/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlParamsMe, patternMe } from "./patternMe";
import { generateUrl } from "@route-codegen/utils";
export type RedirectFnMe = (urlParams?: UrlParamsMe) => void;
export const useRedirectMe = (): RedirectFnMe => {
  const history = useHistory();
  const redirect: RedirectFnMe = (urlParams) => {
    const to = generateUrl(patternMe, { path: {}, query: urlParams?.query, origin: urlParams?.origin });
    history.push(to);
  };
  return redirect;
};
