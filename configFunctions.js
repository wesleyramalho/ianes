import axios from "axios";
import { interceptorForRequest, interceptorForResponse } from "./interceptors";
import { DEFAULT_CONTENT_TYPE, DEFAULT_TIMEOUT } from "./constants";
import {
  defaultBeforeTheRequestIsSentHandler,
  defaultRequestErrorHandler,
  defaultErrorResponseHandler,
  defaultSuccessResponseHandler
} from "./requestHandlers";
import { isNumber } from "./utils";

export const setBaseUrl = url => {
  if (!url) return null;
  return (axios.defaults.baseURL = url);
};

export const setAuthorizationHeader = token => {
  if (!token) return null;
  return (axios.defaults.headers.common["Authorization"] = token);
};

export const resetAuthorizationHeader = () => {
  delete axios.defaults.headers.common["Authorization"];
  return !!axios.defaults.headers.common["Authorization"];
};

export const setDefaultContentType = contentType => {
  if (!contentType) return null;
  return (axios.defaults.headers.post["Content-Type"] = contentType);
};

export const setDefaultTimeOut = timeout => {
  if (!timeout || !isNumber(timeout) || !Number.isInteger(timeout)) return null;
  return (axios.defaults.timeout = timeout);
};

export const configureIanes = ({
  apiUrl = "",
  apiToken = "",
  defaultContentType = DEFAULT_CONTENT_TYPE,
  defaultTimeout = DEFAULT_TIMEOUT,
  handleBeforeTheRequestIsSent = defaultBeforeTheRequestIsSentHandler,
  handleRequestError = defaultRequestErrorHandler,
  handleResponseDataSuccess = defaultSuccessResponseHandler,
  handleResponseError = defaultErrorResponseHandler
}) => {
  setBaseUrl(apiUrl);
  setAuthorizationHeader(apiToken);
  setDefaultContentType(defaultContentType);
  setDefaultTimeOut(defaultTimeout);
  interceptorForRequest(handleBeforeTheRequestIsSent, handleRequestError);
  interceptorForResponse(handleResponseDataSuccess, handleResponseError);
};
