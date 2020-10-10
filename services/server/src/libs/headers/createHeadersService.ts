import { Response } from "express";
import { JWT } from "./types";
import getTokenFromRequest, { GetTokenFromRequest } from "./getTokenFromRequest";
import getViewerFromRequest, { GetViewerFromRequest } from "./getViewerFromRequest";
import setTokenToResponse from "./setTokenToResponse";

export interface CreateHeadersServiceParams {
  primaryDomain?: string;
}

export interface HeadersService {
  getTokenFromRequest: GetTokenFromRequest;
  setTokenToResponse: (response: Response, accessToken: JWT) => Response;
  getViewerFromRequest: GetViewerFromRequest;
}

const createHeadersService = ({ primaryDomain }: CreateHeadersServiceParams): HeadersService => {
  if (!primaryDomain) {
    throw new Error("Unable to create headers service: missing config");
  }

  return {
    getTokenFromRequest: getTokenFromRequest,
    setTokenToResponse: (response, accessToken) => setTokenToResponse(response, accessToken, primaryDomain),
    getViewerFromRequest: getViewerFromRequest,
  };
};

export default createHeadersService;
