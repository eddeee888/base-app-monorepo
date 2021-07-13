/* This file was automatically generated with route-codegen and should not be edited. */
import { Link } from "@/common";
import Anchor from "@/shared/ui/Anchor";
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
export const routeConfig: Record<
  string,
  { pathPattern: string } & ({ type: "external"; component: typeof Anchor } | { type: "internal"; component: typeof Link })
> = {
  me: {
    pathPattern: patternMe,
    type: "internal",
    component: Link,
  },
  home: {
    pathPattern: patternHome,
    type: "external",
    component: Anchor,
  },
  login: {
    pathPattern: patternLogin,
    type: "external",
    component: Anchor,
  },
  signup: {
    pathPattern: patternSignup,
    type: "external",
    component: Anchor,
  },
  termAndConditions: {
    pathPattern: patternTermAndConditions,
    type: "external",
    component: Anchor,
  },
  privacyPolicy: {
    pathPattern: patternPrivacyPolicy,
    type: "external",
    component: Anchor,
  },
  clientSeoStaticImage: {
    pathPattern: patternClientSeoStaticImage,
    type: "external",
    component: Anchor,
  },
  static404: {
    pathPattern: patternStatic404,
    type: "external",
    component: Anchor,
  },
  static500: {
    pathPattern: patternStatic500,
    type: "external",
    component: Anchor,
  },
  xhrLogin: {
    pathPattern: patternXhrLogin,
    type: "external",
    component: Anchor,
  },
  xhrSignup: {
    pathPattern: patternXhrSignup,
    type: "external",
    component: Anchor,
  },
  graphql: {
    pathPattern: patternGraphql,
    type: "external",
    component: Anchor,
  },
  logout: {
    pathPattern: patternLogout,
    type: "external",
    component: Anchor,
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
