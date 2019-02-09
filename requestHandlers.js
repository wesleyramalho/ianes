function hasCompleteResponse(response) {
  if (!!response && !!response.status && !!response.statusText) return true;
  return false;
}

export const defaultBeforeTheRequestIsSentHandler = config => config;

export const defaultRequestErrorHandler = error => Promise.reject(error);

export const defaultSuccessResponseHandler = res => {
  return res.data;
};

export const defaultErrorResponseHandler = err => {
  const { response } = err;
  if (hasCompleteResponse(response)) {
    const { status, statusText } = response;
    return Promise.reject({
      status,
      statusText
    });
  }
  return Promise.reject({
    status: 444,
    statusText: "No response"
  });
};
