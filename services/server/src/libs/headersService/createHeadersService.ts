import { Response } from "express";
import { JWT } from "./types";
import getTokenFromRequest, { GetTokenFromRequest } from "./getTokenFromRequest";
import getViewerFromRequest, { GetViewerFromRequest } from "./getViewerFromRequest";
import setTokenToResponse from "./setTokenToResponse";
import getCsrfTokenFromRequest, { GetCsrfTokenFromRequest } from "./getCsrfTokenFromRequest";
import setCsrfTokenToResponse from "./setCsrfTokenToResponse";

export interface CreateHeadersServiceParams {
  primaryDomain?: string;
}

export interface HeadersService {
  getTokenFromRequest: GetTokenFromRequest;
  setTokenToResponse: (response: Response, accessToken: JWT) => Response;
  getViewerFromRequest: GetViewerFromRequest;
  getCsrfTokenFromRequest: GetCsrfTokenFromRequest;
  setCsrfTokenInResponse: (response: Response) => Response;
}

export const createHeadersService = ({ primaryDomain }: CreateHeadersServiceParams): HeadersService => {
  if (!primaryDomain) {
    throw new Error("Unable to create headers service: missing config");
  }

  return {
    getTokenFromRequest: getTokenFromRequest,
    setTokenToResponse: (response, accessToken) => setTokenToResponse(response, accessToken, primaryDomain),
    getViewerFromRequest: getViewerFromRequest,
    getCsrfTokenFromRequest: getCsrfTokenFromRequest,
    setCsrfTokenInResponse: (response) => setCsrfTokenToResponse(response, primaryDomain),
  };
};
