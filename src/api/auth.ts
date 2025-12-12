// src/api/auth.ts
import axios from "axios";
import { Buffer } from "buffer"; // needed in React Native

export const getToken = async (
  username: string,
  password: string
): Promise<string> => {
  const raw = `${username}:${password}`;
  const encoded = Buffer.from(raw).toString("base64");

  const response = await axios.post(
    "https://api.kvikmyndir.is/authenticate",
    null,
    {
      headers: {
        Authorization: `Basic ${encoded}`,
      },
    }
  );

  return response.data.token;
};
