import axios from "axios";
import {
  defaultBeforeTheRequestIsSentHandler,
  defaultRequestErrorHandler,
  defaultErrorResponseHandler,
  defaultSuccessResponseHandler
} from "./requestHandlers";


export const interceptorForRequest = (
  handleBeforeTheRequestIsSent = defaultBeforeTheRequestIsSentHandler,
  handleRequestError = defaultRequestErrorHandler
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
  handleResponseDataSuccess = defaultSuccessResponseHandler,
  handleResponseError = defaultErrorResponseHandler
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
