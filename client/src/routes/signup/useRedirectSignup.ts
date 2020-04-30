/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsSignup, patternSignup } from "./patternSignup";
import generateUrl from "route-codegen/generateUrl";
export type RedirectSignup = (urlParts: UrlPartsSignup) => void;
const useRedirectSignup = (): RedirectSignup => {
  const history = useHistory();
  const redirect: RedirectSignup = (urlParts) => {
    const to = generateUrl(patternSignup, {}, urlParts.urlQuery);
    history.push(to);
  };
  return redirect;
};
export default useRedirectSignup;
