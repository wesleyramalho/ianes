export const defaultSuccessRequestHandler = res => {
  return res.data;
};

function hasCompleteResponse(response) {
  if (!!response && !!response.status && !!response.statusText) return true;
  return false;
}

export const defaultErrorRequestHandler = err => {
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
