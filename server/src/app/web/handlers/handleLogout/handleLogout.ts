import { Headers } from "@libs/headers";
import { RequestHandler } from "express";
import generateUrlHome from "@libs/routes/home/generateUrlHome";
import generateUrlStatic500 from "@libs/routes/static500/generateUrlStatic500";

export interface HandleLogoutParams {
  headers: Headers;
}

const handleLogout = ({ headers }: HandleLogoutParams): RequestHandler => {
  return (req, res) => {
    try {
      headers.setTokenToResponse(res, "");
      res.redirect(generateUrlHome());
      return;
    } catch (e) {
      console.error(e);
      res.redirect(generateUrlStatic500());
      return;
    }
  };
};

export default handleLogout;
