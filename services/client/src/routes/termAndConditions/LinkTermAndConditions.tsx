/* This file was automatically generated with route-codegen and should not be edited. */
import React from "react";
import { generateUrl } from "@route-codegen/utils";
import Link, { AnchorProps } from "@/shared/ui/Anchor";
import { patternTermAndConditions, UrlParamsTermAndConditions, originTermAndConditions } from "./patternTermAndConditions";
type LinkTermAndConditionsProps = Omit<AnchorProps, "href"> & { urlParams?: UrlParamsTermAndConditions };
export const LinkTermAndConditions: React.FunctionComponent<LinkTermAndConditionsProps> = ({ urlParams, ...props }) => {
  const to = generateUrl(patternTermAndConditions, {
    path: {},
    query: urlParams?.query,
    origin: urlParams?.origin ?? originTermAndConditions,
  });
  return <Link {...props} href={to} />;
};
