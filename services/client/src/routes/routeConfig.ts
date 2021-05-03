/* This file was automatically generated with route-codegen and should not be edited. */
import Link from "~/common/components/Link";
import Anchor from "~/common/shared-ui/Anchor";
import { UrlParamsMe, patternMe } from "./me/patternMe";
import { UrlParamsHome, patternHome } from "./home/patternHome";
import { UrlParamsLogin, patternLogin } from "./login/patternLogin";
import { UrlParamsSignup, patternSignup } from "./signup/patternSignup";
import { UrlParamsTermAndConditions, patternTermAndConditions } from "./termAndConditions/patternTermAndConditions";
import { UrlParamsPrivacyPolicy, patternPrivacyPolicy } from "./privacyPolicy/patternPrivacyPolicy";
import { UrlParamsClientSeoStaticImage, patternClientSeoStaticImage } from "./clientSeoStaticImage/patternClientSeoStaticImage";
import { UrlParamsStatic404, patternStatic404 } from "./static404/patternStatic404";
import { UrlParamsStatic500, patternStatic500 } from "./static500/patternStatic500";
import { UrlParamsXhrLogin, patternXhrLogin } from "./xhrLogin/patternXhrLogin";
import { UrlParamsXhrSignup, patternXhrSignup } from "./xhrSignup/patternXhrSignup";
import { UrlParamsGraphql, patternGraphql } from "./graphql/patternGraphql";
import { UrlParamsLogout, patternLogout } from "./logout/patternLogout";
export const routeConfig = {
  me: {
    pathPattern: patternMe,
    Component: Link,
  },
  home: {
    pathPattern: patternHome,
    Component: Anchor,
  },
  login: {
    pathPattern: patternLogin,
    Component: Anchor,
  },
  signup: {
    pathPattern: patternSignup,
    Component: Anchor,
  },
  termAndConditions: {
    pathPattern: patternTermAndConditions,
    Component: Anchor,
  },
  privacyPolicy: {
    pathPattern: patternPrivacyPolicy,
    Component: Anchor,
  },
  clientSeoStaticImage: {
    pathPattern: patternClientSeoStaticImage,
    Component: Anchor,
  },
  static404: {
    pathPattern: patternStatic404,
    Component: Anchor,
  },
  static500: {
    pathPattern: patternStatic500,
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
  | { to: "me"; urlParams?: UrlParamsMe }
  | { to: "home"; urlParams?: UrlParamsHome }
  | { to: "login"; urlParams?: UrlParamsLogin }
  | { to: "signup"; urlParams?: UrlParamsSignup }
  | { to: "termAndConditions"; urlParams?: UrlParamsTermAndConditions }
  | { to: "privacyPolicy"; urlParams?: UrlParamsPrivacyPolicy }
  | { to: "clientSeoStaticImage"; urlParams: UrlParamsClientSeoStaticImage }
  | { to: "static404"; urlParams?: UrlParamsStatic404 }
  | { to: "static500"; urlParams?: UrlParamsStatic500 }
  | { to: "xhrLogin"; urlParams?: UrlParamsXhrLogin }
  | { to: "xhrSignup"; urlParams?: UrlParamsXhrSignup }
  | { to: "graphql"; urlParams?: UrlParamsGraphql }
  | { to: "logout"; urlParams?: UrlParamsLogout };
