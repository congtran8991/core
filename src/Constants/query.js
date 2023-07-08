import axios from "axios";

export const DEV = process.env.NODE_ENV !== "production";

export const BASE_URL = DEV ? "http://localhost:3000" : "";

export const COMMON_HEADERS = {
  responseType: "application/json",
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json;charset=UTF-8",
};

export const instanceRequest = axios.create({
  baseURL: BASE_URL,
  timeout: 100000,
  headers: COMMON_HEADERS,
});

export const updateAuthorizationToken = (token) => {
    instanceRequest.defaults.headers.common['Authorization'] = token ? 'token' : ''
}
