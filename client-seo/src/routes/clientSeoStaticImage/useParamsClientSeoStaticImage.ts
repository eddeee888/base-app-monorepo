/* This file was automatically generated with route-codegen and should not be edited. */
import { PathParamsNextJSClientSeoStaticImage } from "./patternClientSeoStaticImage";
import { useRouter } from "next/router";
const useParamsClientSeoStaticImage = (): PathParamsNextJSClientSeoStaticImage => {
  const query = useRouter().query;
  return { imageName: query.imageName as string };
};
export default useParamsClientSeoStaticImage;
