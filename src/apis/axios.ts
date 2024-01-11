import { COOKIES, getCookies } from "@/libs/cookies";
import { API_URL } from "@/utils/constants";
import axios, { AxiosResponse, InternalAxiosRequestConfig } from "axios";
import { ISuccessResponse } from "./types";

export const request = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

const handleError = (error: any) => {
  const data = error?.response?.data;
  const originalRequest = error.config;
  const refreshToken = getCookies(COOKIES.refreshToken);

  const isExpired =
    error.response.status === 400 && data.error?.message === "TokenExpire";

  if (
    (error.response.status === 401 || isExpired) &&
    refreshToken &&
    !originalRequest._retry
  ) {
    originalRequest._retry = true;
    return request(originalRequest);
  }
  // if (
  //   (data?.status === 401 || data?.status === 403 || data?.status === 413) &&
  //   data?.config?.url !== URL[0] &&
  //   data?.config?.url !== URL[1]
  // ) {
  //   removeCookies(COOKIES.accessToken);
  //   removeCookies(COOKIES.user);
  //   if (!isServer) {
  //     location.href = "/login";
  //   }
  // }
  return Promise.reject(data);
};

const handleSuccess = (res: AxiosResponse<ISuccessResponse>) => {
  if (res.data?.meta?.code < 200 && res.data?.meta?.code > 299) {
    return Promise.reject(res.data);
  }
  const result = res.data;
  if (result?.meta?.pagination) {
    result.data = {
      list: result.data,
      pagination: result?.meta?.pagination,
    };
  }

  return result as any;
};

request.interceptors.response.use(handleSuccess, handleError);

request.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    const token = getCookies(COOKIES.accessToken);
    config.headers.Authorization = `Bearer ${token}`;
    config.headers["Access-Control-Allow-Origin"] = "*";
    return config;
  },
  (error) => Promise.reject(error)
);
