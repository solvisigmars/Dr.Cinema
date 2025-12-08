import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.kvikmyndir.is",
});

// Called once after we get a token
export const setToken = (token: string) => {
  api.defaults.headers.common["x-access-token"] = token;
};
