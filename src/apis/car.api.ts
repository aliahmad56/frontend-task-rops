import { doDelete, doGet, doPost, doPut } from "../utils/request";

export const dashboardStats = async () => {
  try {
    const response = await doGet("/car/total/count");
    return response;
  } catch (err) {
    return err;
  }
};

export const getAllCars = async (pagination: string) => {
  try {
    const response = await doGet(`/car?${pagination}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const getCar = async (id: string) => {
  try {
    const response = await doGet(`/car/${id}`);
    return response;
  } catch (err) {
    return err;
  }
};

export const editCar = async (body: object, id: string) => {
  try {
    const response = await doPut(`/car/${id}`, body);
    return response;
  } catch (err: any) {
    return err;
  }
};

export const createCar = async (body: object) => {
  try {
    const response = await doPost("/car/", body);
    return response;
  } catch (err: any) {
    return err;
  }
};

export const deleteCar = async (id: string) => {
  try {
    const response = await doDelete(`/car/${id}`, {});
    return response;
  } catch (err: any) {
    return err;
  }
};
