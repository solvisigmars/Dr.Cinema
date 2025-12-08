import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getMovies, MovieQuery } from "../../../api/movies";
import { Movie } from "../../../types/movie";

interface MoviesState {
  items: Movie[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error?: string | null;
}

const initialState: MoviesState = {
  items: [],
  status: "idle",
  error: null
};

// ---------------------------
//    ASYNC ACTION CREATOR
// ---------------------------
export const fetchMovies = createAsyncThunk<
  Movie[],
  MovieQuery | undefined
>("movies/fetchMovies", async (query) => {
  const movies = await getMovies(query);

  // Sort movies alphabetically by title
  movies.sort((a, b) => a.title.localeCompare(b.title));

  return movies;
});

// ---------------------------
//          SLICE
// ---------------------------
const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to load movies";
      });
  }
});

export default moviesSlice.reducer;
