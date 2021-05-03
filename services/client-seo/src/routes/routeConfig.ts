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
export const routeConfig = {
  home: {
    pathPattern: patternHome,
    Component: Link,
  },
  login: {
    pathPattern: patternLogin,
    Component: Link,
  },
  signup: {
    pathPattern: patternSignup,
    Component: Link,
  },
  termAndConditions: {
    pathPattern: patternTermAndConditions,
    Component: Link,
  },
  privacyPolicy: {
    pathPattern: patternPrivacyPolicy,
    Component: Link,
  },
  clientSeoStaticImage: {
    pathPattern: patternClientSeoStaticImage,
    Component: Link,
  },
  static404: {
    pathPattern: patternStatic404,
    Component: Link,
  },
  static500: {
    pathPattern: patternStatic500,
    Component: Link,
  },
  me: {
    pathPattern: patternMe,
    Component: Anchor,
  },
  xhrLogin: {
    pathPattern: patternXhrLogin,
    Component: Anchor,
  },
  xhrSignup: {
    pathPattern: patternXhrSignup,
    Component: Anchor,
  },
  graphql: {
    pathPattern: patternGraphql,
    Component: Anchor,
  },
  logout: {
    pathPattern: patternLogout,
    Component: Anchor,
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
