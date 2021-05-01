/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import {
  UrlParamsClientSeoStaticImage,
  patternNextJSClientSeoStaticImage,
  possilePathParamsClientSeoStaticImage,
} from "./patternClientSeoStaticImage";
export type RedirectFnClientSeoStaticImage = (urlParams: UrlParamsClientSeoStaticImage) => void;
export const useRedirectClientSeoStaticImage = (): RedirectFnClientSeoStaticImage => {
  const router = useRouter();
  const redirect: RedirectFnClientSeoStaticImage = (urlParams) => {
    const query = urlParams?.query ?? {};
    const path = urlParams.path;
    const pathname = possilePathParamsClientSeoStaticImage
      .filter((key) => !(key in urlParams.path))
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
