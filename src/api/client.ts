import axios from "axios";

/**
 * Axios instance for kvikmyndir.is
 */
export const api = axios.create({
  baseURL: "https://api.kvikmyndir.is",
});

/**
 * API token (your credentials)
 */
export const setApiToken = (token: string) => {
  api.defaults.headers.common["x-access-token"] = token;
};

/**
 * Fake user token (login only)
 */
export let userToken: string | null = null;

export const setUserToken = (token: string | null) => {
  userToken = token;
};
