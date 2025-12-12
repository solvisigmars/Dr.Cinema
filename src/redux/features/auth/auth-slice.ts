import { API_PASSWORD, API_USERNAME } from "@/api-credentials";
import { getToken } from "@/src/api/auth";
import { setApiToken, setUserToken } from "@/src/api/client";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as SecureStore from "expo-secure-store";

/* ================= TYPES ================= */

export interface AuthUser {
  email: string;
  name: string;
}

interface StoredUser extends AuthUser {
  password: string;
}

interface AuthState {
  apiToken: string | null;
  user: AuthUser | null;
  userToken: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: AuthState = {
  apiToken: null,
  user: null,
  userToken: null,
  status: "idle",
  error: null
};

const USER_KEY = "authUser";
const TOKEN_KEY = "authUserToken";

/* ================= API TOKEN ================= */

export const authenticateUser = createAsyncThunk(
  "auth/authenticateApi",
  async () => {
    const token = await getToken(API_USERNAME, API_PASSWORD);
    setApiToken(token);
    return token;
  }
);

/* ================= RESTORE ================= */

export const restoreSession = createAsyncThunk(
  "auth/restoreSession",
  async () => {
    const userJson = await AsyncStorage.getItem(USER_KEY);
    const token = await SecureStore.getItemAsync(TOKEN_KEY);

    if (!userJson || !token) return null;

    const parsed: StoredUser = JSON.parse(userJson);
    setUserToken(token);

    return {
      user: { email: parsed.email, name: parsed.name },
      token
    };
  }
);

/* ================= REGISTER ================= */

export const registerUser = createAsyncThunk(
  "auth/register",
  async (
    { email, password, name }: { email: string; password: string; name: string },
    { rejectWithValue }
  ) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email))
      return rejectWithValue("Netfang er ógilt.");

    const user: StoredUser = { email, password, name };
    const token = "user_" + Date.now();

    await AsyncStorage.setItem(USER_KEY, JSON.stringify(user));
    await SecureStore.setItemAsync(TOKEN_KEY, token);

    setUserToken(token);

    return { user: { email, name }, token };
  }
);

/* ================= LOGIN ================= */

export const loginUser = createAsyncThunk(
  "auth/login",
  async (
    { email, password }: { email: string; password: string },
    { rejectWithValue }
  ) => {
    const stored = await AsyncStorage.getItem(USER_KEY);
    if (!stored) return rejectWithValue("Enginn aðgangur fannst.");

    const saved: StoredUser = JSON.parse(stored);

    if (saved.email !== email || saved.password !== password)
      return rejectWithValue("Rangt netfang eða lykilorð.");

    const token = "user_" + Date.now();
    await SecureStore.setItemAsync(TOKEN_KEY, token);

    setUserToken(token);

    return { user: { email: saved.email, name: saved.name }, token };
  }
);

/* ================= LOGOUT ================= */

export const logoutUser = createAsyncThunk("auth/logout", async () => {
  await SecureStore.deleteItemAsync(TOKEN_KEY);
  setUserToken(null);
});

/* ================= SLICE ================= */

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authenticateUser.fulfilled, (state, action) => {
      state.apiToken = action.payload;
    });

    builder.addCase(restoreSession.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload.user;
        state.userToken = action.payload.token;
      }
    });

    builder
      .addCase(registerUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userToken = action.payload.token;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.userToken = action.payload.token;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.user = null;
        state.userToken = null;
        state.status = "idle";
      });
  }
});

export default authSlice.reducer;
