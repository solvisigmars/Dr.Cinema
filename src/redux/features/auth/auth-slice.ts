import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getToken } from "@/src/api/auth";
import { setToken } from "@/src/api/client";
import { API_USERNAME, API_PASSWORD } from "@/api-credentials";

interface AuthState {
  token: string | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState: AuthState = {
  token: null,
  status: "idle",
  error: null,
};

// Fetch token (will run automatically on app startup)
export const authenticateUser = createAsyncThunk("auth/authenticate", async () => {
  const token = await getToken(API_USERNAME, API_PASSWORD);
  setToken(token);
  return token;
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(authenticateUser.pending, state => {
        state.status = "loading";
      })
      .addCase(authenticateUser.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.token = action.payload;
      })
      .addCase(authenticateUser.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to authenticate";
      });
  }
});

export default authSlice.reducer;
