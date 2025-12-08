// src/redux/features/cinemas/cinemas-slice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCinemas } from "@/src/api/cinemas";
import { Cinema } from "@/src/types/cinema";

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

// 🔁 Async action creator (required by assignment)
// All network requests MUST go through async thunks
export const fetchCinemas = createAsyncThunk<Cinema[]>(
  "cinemas/fetchCinemas",
  async () => {
    const cinemas = await getCinemas();

    // Alphabetical sorting (assignment requirement)
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
