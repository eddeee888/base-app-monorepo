/* This file was automatically generated with route-codegen and should not be edited. */
import { useHistory } from "react-router";
import { UrlPartsMe, patternMe } from "./patternMe";
import generateUrl from "route-codegen/generateUrl";
export type RedirectMe = (urlParts: UrlPartsMe) => void;
const useRedirectMe = (): RedirectMe => {
  const history = useHistory();
  const redirect: RedirectMe = (urlParts) => {
    const to = generateUrl(patternMe, {}, urlParts.urlQuery);
    history.push(to);
  };
  return redirect;
};
export default useRedirectMe;
