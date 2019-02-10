import { hasCompleteResponse } from "./utils";

export const defaultBeforeTheRequestIsSentHandler = config => config;

export const defaultRequestErrorHandler = error => Promise.reject(error);

export const defaultSuccessResponseHandler = res => res.data;

export const defaultErrorResponseHandler = err => {
  const { response } = err;
  if (hasCompleteResponse(response)) {
    const { status, statusText, data } = response;
    return Promise.reject({
      status,
      statusText,
      data
    });
  }
  return Promise.reject({
    status: 444,
    statusText: "No response"
  });
};
