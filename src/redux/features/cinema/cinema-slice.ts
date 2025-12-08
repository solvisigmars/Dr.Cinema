// src/redux/features/cinemas/cinemas-slice.ts
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getCinemas, Cinema } from "../../../api/cinemas";

interface CinemasState {
  items: Cinema[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState: CinemasState = {
  items: [],
  status: "idle",
  error: null,
};

// 🔁 Async action creator – all network requests must go through these (assignment requirement)
export const fetchCinemas = createAsyncThunk<Cinema[]>(
  "cinemas/fetchCinemas",
  async () => {
    const cinemas = await getCinemas();
    // you can sort A–Z here already if you want:
    cinemas.sort((a, b) => a.name.localeCompare(b.name));
    return cinemas;
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
  },
});

export default cinemasSlice.reducer;
