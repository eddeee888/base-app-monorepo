import { ComponentType, FunctionComponent } from "react";
import { generateUrl } from "@route-codegen/utils";
import Button, { ButtonProps } from "../Button";

type RouteConfig = Record<string, { pathPattern: string; component: ComponentType<any>; type: "internal" | "external" }>;
type ButtonXComponent<P> = FunctionComponent<P & Omit<ButtonProps, "href">>;

export function createButtonX<P extends { to: string; urlParams?: Record<string, any> }>(
  routeConfig: RouteConfig
): ButtonXComponent<{ route?: P }> {
  const ButtonX: ButtonXComponent<{ route?: P }> = ({ route, disabled, ...props }) => {
    if (!route || disabled) {
      return <Button disabled={disabled} {...props} />;
    }

    const { to, urlParams } = route;

    const { pathPattern, component: Component } = routeConfig[to];
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
  return ButtonX;
}
