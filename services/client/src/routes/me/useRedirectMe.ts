/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsMe, patternMe } from "./patternMe";
import generateUrl from "route-codegen/generateUrl";
export type RedirectFnMe = (urlParts?: UrlPartsMe) => void;
const useRedirectMe = (): RedirectFnMe => {
  const history = useHistory();
  const redirect: RedirectFnMe = (urlParts) => {
    const to = generateUrl(patternMe, {}, urlParts?.query, urlParts?.origin);
    history.push(to);
  };
  return redirect;
};
export default useRedirectMe;
