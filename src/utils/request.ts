import { getLocalStorage } from "./localStorage";
import Axios, { AxiosRequestHeaders } from "axios";
import { CreateRequestConfigParams } from "./types";
import { AUTH_TOKEN, LOCAL_STORAGE } from "../utils/constant";

const SERVER_API = import.meta.env.VITE_SERVER_URL;

const axios = Axios.create({
  baseURL: SERVER_API,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

axios.interceptors.request.use((req: any) => {
  if (req.withAuth) {
    const token = getLocalStorage(LOCAL_STORAGE.ID_TOKEN);
    if (token && req.headers) {
      req.headers = {
        [AUTH_TOKEN]: `Bearer ${token}`,
      };
    } else {
      throw new Axios.Cancel(
        "Looks like you forgot to set valid value for access token"
      );
    }
  }

  return req;
});

let interceptorId: number | null = null;
export const registerAxiosLogoutInterceptor = (onTokenExpired: () => void) => {
  interceptorId = axios.interceptors.response.use((res) => {
    if (res.status === 401) {
      onTokenExpired();
    }

    return res;
  });
};
export const unregisterAxiosLogoutInterceptor = () => {
  if (interceptorId) {
    axios.interceptors.response.eject(interceptorId);
  }
};

const createRequestConfig = ({
  baseURL,
  headers,
  data,
  withAuth,
}: CreateRequestConfigParams) => {
  const config: any = {};

  if (baseURL) {
    config.baseURL = baseURL;
  }
  if (headers) {
    config.headers = headers;
  }
  if (data) {
    config.data = data;
  }

  config.withAuth = withAuth;

  return config;
};

export const doGet = async (
  path: string,
  withAuth = true,
  headers?: AxiosRequestHeaders,
  baseURL = ""
) => {
  try {
    const response = await axios.get(
      path,
      createRequestConfig({ baseURL, headers, withAuth })
    );

    const { statusText, data: newData, status } = response;

    return {
      statusText,
      data: newData,
      statusCode: status,
    };
  } catch (error: any) {
    return {
      err: error?.response?.data?.err,
      statusText: error?.response?.statusText,
      message: error?.response?.data?.message,
      statusCode: error?.response?.status,
    };
  }
};

export const doPost = async (
  path: string,
  data: object,
  withAuth = true,
  headers?: AxiosRequestHeaders,
  baseURL = ""
) => {
  try {
    const response = await axios.post(
      path,
      data,
      createRequestConfig({ baseURL, headers, withAuth })
    );

    const { statusText, data: newData, status } = response;

    return {
      statusText,
      data: newData,
      statusCode: status,
    };
  } catch (error: any) {
    return {
      err: error?.response?.data?.err,
      statusText: error?.response?.statusText,
      statusCode: error.response.status,
      message: error?.response?.data?.message,
    };
  }
};

export const doPut = async (
  path: string,
  data: object,
  withAuth = true,
  headers?: AxiosRequestHeaders,
  baseURL = ""
) => {
  try {
    const response = await axios.put(
      path,
      data,
      createRequestConfig({ baseURL, headers, withAuth })
    );

    const { statusText, data: newData, status } = response;

    return {
      statusText,
      data: newData,
      statusCode: status,
    };
  } catch (error: any) {
    return {
      err: error?.response?.data?.err,
      statusText: error?.response?.statusText,
      statusCode: error.response.status,
      message: error?.response?.data?.message,
    };
  }
};

export const doPatch = async (
  path: string,
  data: object,
  withAuth = true,
  headers?: AxiosRequestHeaders,
  baseURL = ""
) => {
  try {
    const response = await axios.patch(
      path,
      data,
      createRequestConfig({ baseURL, headers, withAuth })
    );

    const { statusText, data: newData, status } = response;

    return {
      statusText,
      data: newData,
      statusCode: status,
    };
  } catch (error: any) {
    return {
      err: error?.response?.data?.err,
      statusText: error?.response?.statusText,
      statusCode: error.response.status,
      message: error?.response?.data?.message,
    };
  }
};

export const doDelete = async (
  path: string,
  data: object,
  withAuth = true,
  headers?: AxiosRequestHeaders,
  baseURL = ""
) => {
  try {
    const response = await axios.delete(
      path,
      createRequestConfig({ baseURL, headers, data, withAuth })
    );

    const { statusText, data: newData, status } = response;
    return {
      statusText,
      data: newData,
      statusCode: status,
    };
  } catch (error: any) {
    return {
      err: error?.response?.data?.err,
      statusText: error?.response?.statusText,
      statusCode: error.response.status,
      message: error?.response?.data?.message,
    };
  }
};
