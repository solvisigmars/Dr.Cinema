import { configureStore } from "@reduxjs/toolkit";

// Import your slices
import authReducer from "./features/auth/auth-slice";
import cinemasReducer from "./features/cinema/cinema-slice";
import favouriteReducer from "./features/favourite/favourite-slice";
import filterReducer from "./features/filters/filter-slice";
import moviesReducer from "./features/movies/movies-slice";
import upcomingReducer from "./features/upcoming/upcoming-slice";   

export const store = configureStore({
  reducer: {
    auth: authReducer,
    cinemas: cinemasReducer,
    movies: moviesReducer,
    filters: filterReducer,
    favourites: favouriteReducer,
    upcoming: upcomingReducer

    // movies: moviesReducer,
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
