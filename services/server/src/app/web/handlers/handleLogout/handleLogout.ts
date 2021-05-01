import { HeadersService } from "@libs/headersService";
import { RequestHandler } from "express";
import { generateUrlHome, generateUrlStatic500 } from "@libs/routes";

export interface HandleLogoutParams {
  headers: HeadersService;
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
