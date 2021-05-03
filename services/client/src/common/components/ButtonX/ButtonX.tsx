import { FunctionComponent } from "react";
import { generateUrl } from "@route-codegen/utils";
import Button, { ButtonProps } from "~/common/shared-ui/Button";
import { routeConfig, RouteConfigProps } from "~/routes/routeConfig";

export type ButtonXProps = Omit<ButtonProps, "href"> & RouteConfigProps;

const ButtonX: FunctionComponent<ButtonXProps> = ({ to, urlParams, ...props }) => {
  const { pathPattern, Component } = routeConfig[to];
  const href = generateUrl(pathPattern, {
    path: urlParams && "path" in urlParams ? urlParams.path : {},
    query: urlParams?.query,
    origin: urlParams?.origin,
  });
  return (
    <Component href={href}>
      <Button {...props} component="span" />
    </Component>
  );
};

export default ButtonX;
