import axios from "axios";
import appConfig from "../Constants/config.const";
export const AXIOS = function (param) {
  const { path = "/", method = "GET", data = {}, overrideDomain } = param;
  let url = (overrideDomain || appConfig.api_domain) + path;
  let config = {
    headers: {
      "content-type": "application/json",
      "Device-Type": "Webapp",
    },
    method,
    url,
    data,
    timeout: 2 * 60 * 1000,
  };
  return new Promise((resolve, reject) => {
    axios(config)
      .then((resp) => {
        const { data } = resp;
        resolve(data);
      })
      .catch((err) => {
        console.log("[err when call call api]", err);
        reject(err.response ? err.response.data : err);
      });
  });
};
