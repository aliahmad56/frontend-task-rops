import { doDelete, doGet, doPost, doPut } from "../utils/request";

export const getAllCatogories = async (pagination: string) => {
  try {
    const response = await doGet(`/category?${pagination}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const getCategory = async (id: string) => {
  try {
    const response = await doGet(`/category/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const editCategory = async (body: object, id: string) => {
  try {
    const response = await doPut(`/category/${id}`, body);
    return response;
  } catch (err: any) {
    return err;
  }
};

export const createCategory = async (body: object) => {
  try {
    const response = await doPost("/category/", body);
    return response;
  } catch (err: any) {
    return err;
  }
};

export const deleteCategory = async (id: string) => {
  try {
    const response = await doDelete(`/category/${id}`, {});
    return response;
  } catch (err: any) {
    return err;
  }
};
