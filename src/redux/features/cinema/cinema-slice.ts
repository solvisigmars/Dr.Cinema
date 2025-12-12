// src/redux/features/cinemas/cinemas-slice.ts
import { getCinemas } from "@/src/api/cinemas";
import { Cinema } from "@/src/types/cinema";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

interface CinemasState {
  items: Cinema[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState: CinemasState = {
  items: [],
  status: "idle",
  error: null
};

export const fetchCinemas = createAsyncThunk<Cinema[]>(
  "cinemas/fetchCinemas",
  async () => {
    const cinemas = await getCinemas();

    return cinemas.sort((a, b) => a.name.localeCompare(b.name));
  }
);

const cinemasSlice = createSlice({
  name: "cinemas",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCinemas.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchCinemas.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchCinemas.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load cinemas";
      });
  }
});

export default cinemasSlice.reducer;
