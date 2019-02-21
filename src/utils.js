export const isNumber = variable => typeof variable === "number";

export const hasCompleteResponse = response => {
  if (!!response && !!response.status && !!response.statusText) return true;
  return false;
};
