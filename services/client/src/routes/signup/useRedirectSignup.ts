/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsSignup, patternSignup } from "./patternSignup";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnSignup = (urlParts?: UrlPartsSignup) => void;
const useRedirectSignup = (): RedirectFnSignup => {
  const history = useHistory();
  const redirect: RedirectFnSignup = (urlParts) => {
    const to = generateUrl(patternSignup, {}, urlParts?.urlQuery, urlParts?.origin);
    history.push(to);
  };
  return redirect;
};
export default useRedirectSignup;
