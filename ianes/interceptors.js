import {
  defaultErrorRequestHandler,
  defaultSuccessRequestHandler
} from "./requestHandlers";

const axios = require("axios");

export const interceptorForRequest = (
  handleBeforeTheRequestIsSent = config => config,
  handleRequestError = error => Promise.reject(error)
) => {
  //request interceptor
  axios.interceptors.request.use(
    function(config) {
      // Do something before request is sent
      return handleBeforeTheRequestIsSent(config);
    },
    function(error) {
      // Do something with request error
      return handleRequestError(error);
    }
  );
};

export const interceptorForResponse = (
  handleResponseDataSuccess = defaultSuccessRequestHandler,
  handleResponseError = defaultErrorRequestHandler
) => {
  // Add a response interceptor
  axios.interceptors.response.use(
    function(response) {
      // Do something with response data
      return handleResponseDataSuccess(response);
    },
    function(error) {
      // Do something with response error
      return handleResponseError(error);
    }
  );
};
