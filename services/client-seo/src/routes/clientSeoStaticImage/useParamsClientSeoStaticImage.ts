/* This file was automatically generated with route-codegen and should not be edited. */
import { PathParamsClientSeoStaticImage } from "./patternClientSeoStaticImage";
import { useRouter } from "next/router";
export const useParamsClientSeoStaticImage = (): PathParamsClientSeoStaticImage => {
  const query = useRouter().query;
  return { imageName: query.imageName as PathParamsClientSeoStaticImage["imageName"] };
};
