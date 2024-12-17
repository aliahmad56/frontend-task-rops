import { doGet, doPost } from "../utils/request";

export const loginUser = async (body: object) => {
  try {
    const response = await doPost("/auth/login", body, false);
    return response;
  } catch (err) {
    err;
  }
};

export const getMe = async () => {
  try {
    const response = await doGet("/auth/me");
    return response;
  } catch (err: any) {
    return err;
  }
};

export const signup = async (body: object) => {
  try {
    const response = await doPost("/auth/signup", body, false);
    return response;
  } catch (err) {
    err;
  }
};
