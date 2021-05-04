/* This file was automatically generated with route-codegen and should not be edited. */
import Link from "~/common/components/Link";
import Anchor from "~/common/shared-ui/Anchor";
import { UrlParamsHome, patternHome } from "./home/patternHome";
import { UrlParamsLogin, patternLogin } from "./login/patternLogin";
import { UrlParamsSignup, patternSignup } from "./signup/patternSignup";
import { UrlParamsTermAndConditions, patternTermAndConditions } from "./termAndConditions/patternTermAndConditions";
import { UrlParamsPrivacyPolicy, patternPrivacyPolicy } from "./privacyPolicy/patternPrivacyPolicy";
import { UrlParamsClientSeoStaticImage, patternClientSeoStaticImage } from "./clientSeoStaticImage/patternClientSeoStaticImage";
import { UrlParamsStatic404, patternStatic404 } from "./static404/patternStatic404";
import { UrlParamsStatic500, patternStatic500 } from "./static500/patternStatic500";
import { UrlParamsMe, patternMe } from "./me/patternMe";
import { UrlParamsXhrLogin, patternXhrLogin } from "./xhrLogin/patternXhrLogin";
import { UrlParamsXhrSignup, patternXhrSignup } from "./xhrSignup/patternXhrSignup";
import { UrlParamsGraphql, patternGraphql } from "./graphql/patternGraphql";
import { UrlParamsLogout, patternLogout } from "./logout/patternLogout";
export const routeConfig: Record<
  string,
  { pathPattern: string } & ({ type: "external"; component: typeof Anchor } | { type: "internal"; component: typeof Link })
> = {
  home: {
    pathPattern: patternHome,
    component: Link,
    type: "internal",
  },
  login: {
    pathPattern: patternLogin,
    component: Link,
    type: "internal",
  },
  signup: {
    pathPattern: patternSignup,
    component: Link,
    type: "internal",
  },
  termAndConditions: {
    pathPattern: patternTermAndConditions,
    component: Link,
    type: "internal",
  },
  privacyPolicy: {
    pathPattern: patternPrivacyPolicy,
    component: Link,
    type: "internal",
  },
  clientSeoStaticImage: {
    pathPattern: patternClientSeoStaticImage,
    component: Link,
    type: "internal",
  },
  static404: {
    pathPattern: patternStatic404,
    component: Link,
    type: "internal",
  },
  static500: {
    pathPattern: patternStatic500,
    component: Link,
    type: "internal",
  },
  me: {
    pathPattern: patternMe,
    component: Anchor,
    type: "external",
  },
  xhrLogin: {
    pathPattern: patternXhrLogin,
    component: Anchor,
    type: "external",
  },
  xhrSignup: {
    pathPattern: patternXhrSignup,
    component: Anchor,
    type: "external",
  },
  graphql: {
    pathPattern: patternGraphql,
    component: Anchor,
    type: "external",
  },
  logout: {
    pathPattern: patternLogout,
    component: Anchor,
    type: "external",
  },
};
export type RouteConfigProps =
  | { to: "home"; urlParams?: UrlParamsHome }
  | { to: "login"; urlParams?: UrlParamsLogin }
  | { to: "signup"; urlParams?: UrlParamsSignup }
  | { to: "termAndConditions"; urlParams?: UrlParamsTermAndConditions }
  | { to: "privacyPolicy"; urlParams?: UrlParamsPrivacyPolicy }
  | { to: "clientSeoStaticImage"; urlParams: UrlParamsClientSeoStaticImage }
  | { to: "static404"; urlParams?: UrlParamsStatic404 }
  | { to: "static500"; urlParams?: UrlParamsStatic500 }
  | { to: "me"; urlParams?: UrlParamsMe }
  | { to: "xhrLogin"; urlParams?: UrlParamsXhrLogin }
  | { to: "xhrSignup"; urlParams?: UrlParamsXhrSignup }
  | { to: "graphql"; urlParams?: UrlParamsGraphql }
  | { to: "logout"; urlParams?: UrlParamsLogout };
