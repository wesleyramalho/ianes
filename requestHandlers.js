import { hasCompleteResponse } from "./utils";

export const defaultBeforeTheRequestIsSentHandler = (config = {}) => config;

export const defaultRequestErrorHandler = (
  error = { status: 444, statusText: "No response" }
) => Promise.reject(error);

export const defaultSuccessResponseHandler = (res = { data: {} }) => res.data;

export const defaultErrorResponseHandler = (err = {}) => {
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
