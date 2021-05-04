/* This file was automatically generated with route-codegen and should not be edited. */
import { useRouter } from "next/router";
import { PathParamsClientSeoStaticImage } from "./patternClientSeoStaticImage";

export const useParamsClientSeoStaticImage = (): PathParamsClientSeoStaticImage => {
  const query = useRouter().query;
  return { imageName: query.imageName as PathParamsClientSeoStaticImage["imageName"] };
};
