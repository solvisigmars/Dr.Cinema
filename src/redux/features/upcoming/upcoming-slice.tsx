import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UpcomingMovie } from "@/src/types/upcoming-movie";
import { getUpcomingMovies } from "@/src/api/upcoming";

interface UpcomingState {
  items: UpcomingMovie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState: UpcomingState = {
  items: [],
  status: "idle",
  error: null,
};

// ⭐ Async thunk – fetch upcoming movies
export const fetchUpcoming = createAsyncThunk<UpcomingMovie[]>(
  "upcoming/fetchUpcoming",
  async () => {
    const movies = await getUpcomingMovies();

    // Optional: sort by release date
    return movies.sort((a, b) =>
      (a["release-dateIS"] ?? "").localeCompare(b["release-dateIS"] ?? "")
    );
  }
);

const upcomingSlice = createSlice({
  name: "upcoming",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUpcoming.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchUpcoming.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchUpcoming.rejected, (state, action) => {
        state.status = "failed";
        state.error =
          action.error.message ?? "Failed to load upcoming movies";
      });
  },
});

export default upcomingSlice.reducer;
