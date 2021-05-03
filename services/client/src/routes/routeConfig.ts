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
    pattern: patternMe,
    component: Link,
  },
  home: {
    pattern: patternHome,
    component: Anchor,
  },
  login: {
    pattern: patternLogin,
    component: Anchor,
  },
  signup: {
    pattern: patternSignup,
    component: Anchor,
  },
  termAndConditions: {
    pattern: patternTermAndConditions,
    component: Anchor,
  },
  privacyPolicy: {
    pattern: patternPrivacyPolicy,
    component: Anchor,
  },
  clientSeoStaticImage: {
    pattern: patternClientSeoStaticImage,
    component: Anchor,
  },
  static404: {
    pattern: patternStatic404,
    component: Anchor,
  },
  static500: {
    pattern: patternStatic500,
    component: Anchor,
  },
  xhrLogin: {
    pattern: patternXhrLogin,
    component: Anchor,
  },
  xhrSignup: {
    pattern: patternXhrSignup,
    component: Anchor,
  },
  graphql: {
    pattern: patternGraphql,
    component: Anchor,
  },
  logout: {
    pattern: patternLogout,
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
