import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.kvikmyndir.is"
});

export const setToken = (token: string) => {
  api.defaults.headers.common["x-access-token"] = token;
};
