import { configureStore } from "@reduxjs/toolkit";

// Import your slices
import authReducer from "./features/auth/auth-slice";
import cinemasReducer from "./features/cinema/cinema-slice";
import moviesReducer from "./features/movies/movies-slice";

// import moviesReducer from "./features/movies/movies-slice";  // add later

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinemas: cinemasReducer,
    movies: moviesReducer
    // movies: moviesReducer,
  }
});

// Types for TypeScript
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
