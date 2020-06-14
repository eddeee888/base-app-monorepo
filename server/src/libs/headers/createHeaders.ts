import getTokenFromRequest, { GetTokenFromRequest } from "./getTokenFromRequest";
import getViewerFromRequest, { GetViewerFromRequest } from "./getViewerFromRequest";
import setTokenToResponse, { SetTokenToResponse } from "./setTokenToResponse";

export interface Headers {
  getTokenFromRequest: GetTokenFromRequest;
  setTokenToResponse: SetTokenToResponse;
  getViewerFromRequest: GetViewerFromRequest;
}

const createHeaders = (): Headers => {
  return {
    getTokenFromRequest,
    setTokenToResponse,
    getViewerFromRequest,
  };
};

export default createHeaders;
