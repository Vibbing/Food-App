import axios from "axios";
import { API_BASE_URL } from "../constants";

const apiBaseQuery = axios.create(API_BASE_URL);

export const getUser = async () => {
  try {
    const response = await apiBaseQuery.get(`user`);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fetch user");
  }
};

export const loginUser = async (userInfo) => {
  try {
    const response = await apiBaseQuery.post(`login`, userInfo);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Faled to fetch user");
  }
};
