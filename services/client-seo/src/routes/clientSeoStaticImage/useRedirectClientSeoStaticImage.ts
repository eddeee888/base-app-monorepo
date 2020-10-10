/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import {
  UrlPartsClientSeoStaticImage,
  patternNextJSClientSeoStaticImage,
  possilePathParamsClientSeoStaticImage,
} from "./patternClientSeoStaticImage";
export type RedirectFnClientSeoStaticImage = (urlParts: UrlPartsClientSeoStaticImage) => void;
const useRedirectClientSeoStaticImage = (): RedirectFnClientSeoStaticImage => {
  const router = useRouter();
  const redirect: RedirectFnClientSeoStaticImage = (urlParts) => {
    const query = urlParts?.query ?? {};
    const path = urlParts.path;
    const pathname = possilePathParamsClientSeoStaticImage
      .filter((key) => !(key in urlParts.path))
      .reduce((prevPattern, suppliedParam) => prevPattern.replace(`/[${suppliedParam}]`, ""), patternNextJSClientSeoStaticImage);
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
export default useRedirectClientSeoStaticImage;
