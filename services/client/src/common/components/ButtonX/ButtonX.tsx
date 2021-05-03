import { generateUrl } from "@route-codegen/utils";
import React from "react";
import Button, { ButtonProps } from "~/common/shared-ui/Button";
import { routeConfig, RouteConfigProps } from "~/routes/routeConfig";

export type ButtonXProps = Omit<ButtonProps, "href"> & RouteConfigProps;

const ButtonX: React.FunctionComponent<ButtonXProps> = ({ to, urlParams = {}, ...props }) => {
  const { pattern, component: Link } = routeConfig[to];
  const href = generateUrl(pattern, urlParams as any);

  return (
    <Link href={href}>
      <Button {...props} component="span" />
    </Link>
  );
};

export default ButtonX;
