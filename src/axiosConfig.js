import axios from "axios";

axios.defaults.baseURL = "https://student.valuxapps.com/api";

export const setAccessToken = (token) => {
  axios.defaults.headers.common = {
    Authorization: token,
  };
};
