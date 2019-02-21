import axios from "axios";
import {
  defaultBeforeTheRequestIsSentHandler,
  defaultRequestErrorHandler,
  defaultErrorResponseHandler,
  defaultSuccessResponseHandler
} from "./requestHandlers";
import { setAuthorizationHeader } from "./configFunctions";
import RefreshTokenHandler from "./RefreshTokenHandler";

const isTimeToRefreshToken = () => true;

async function refreshTokenLogic(config) {
  const refreshTokenHandler = new RefreshTokenHandler();
  //if is close to time to refresh token
  if (isTimeToRefreshToken() && !refreshTokenHandler.isRefreshing) {
    //call method do get new token from api
    refreshTokenHandler.getNewToken();
  }

  if (refreshTokenHandler.isRefreshing) {
    let newToken = await refreshTokenHandler.getPromiseWithNewToken();

    //TODO: update time to refresh token

    //Sets Authorization Header with new token for next requests that hasn't started yet
    setAuthorizationHeader(newToken);

    //Sets Authorization Header with new token for requests that had already started
    let newConfig = Object.assign({}, config);
    newConfig.headers.common.Authorization = newToken;
    return newConfig;
  }
  return config;
}

export const interceptorForRequest = (
  handleBeforeTheRequestIsSent = defaultBeforeTheRequestIsSentHandler,
  handleRequestError = defaultRequestErrorHandler
) => {
  //request interceptor
  axios.interceptors.request.use(
    async function(config) {
      return handleBeforeTheRequestIsSent(await refreshTokenLogic(config));
    },
    function(error) {
      // Do something with request error
      return handleRequestError(error);
    }
  );
  return axios.interceptors;
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
  return axios.interceptors;
};
