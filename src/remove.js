import axios from "axios";

export const remove = url =>
  axios(url, {
    method: "DELETE"
  });
