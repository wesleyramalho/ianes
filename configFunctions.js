import axios from "axios";

export const setBaseUrl = url => {
  if (!url) return null;
  axios.defaults.baseURL = url;
};

export const setAuthorizationHeader = token => {
  if (!token) return null;
  axios.defaults.headers.common["Authorization"] = token;
};

export const setDefaultContentType = contentType => {
  if (!contentType) return null;
  axios.defaults.headers.post["Content-Type"] = contentType;
};

export const setDefaultTimeOut = timeout => {
  if (!timeout) return null;
  axios.defaults.timeout = timeout;
};

export const configureIanes = (
  baseUrl = "",
  token = "",
  defaultContentType = "application/json",
  timeOut = 240000
) => {
  setBaseUrl(baseUrl);
  setAuthorizationHeader(token);
  setDefaultContentType(defaultContentType);
  setDefaultTimeOut(timeOut);
};
